# Serverless API Pattern with CDK TypeScript

## Overview

This pattern demonstrates a production-ready serverless REST API using API Gateway, Lambda, and DynamoDB with TypeScript.

## Architecture

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  API Gateway│────▶│   Lambda    │────▶│  DynamoDB   │
└─────────────┘     └─────────────┘     └─────────────┘
       │                    │                    │
       ▼                    ▼                    ▼
  [CloudWatch]        [X-Ray]            [Backups]
```

## Implementation

```typescript
import { Stack, StackProps, RemovalPolicy } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as lambda from 'aws-cdk-lib/aws-lambda-nodejs';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as logs from 'aws-cdk-lib/aws-logs';
import { Runtime, Tracing } from 'aws-cdk-lib/aws-lambda';

export interface ServerlessApiStackProps extends StackProps {
  stageName: string;
  tableName: string;
  enableTracing?: boolean;
}

export class ServerlessApiStack extends Stack {
  public readonly api: apigateway.RestApi;
  public readonly table: dynamodb.Table;

  constructor(scope: Construct, id: string, props: ServerlessApiStackProps) {
    super(scope, id, props);

    // DynamoDB Table with best practices
    this.table = new dynamodb.Table(this, 'ItemsTable', {
      tableName: props.tableName,
      partitionKey: {
        name: 'id',
        type: dynamodb.AttributeType.STRING
      },
      sortKey: {
        name: 'timestamp',
        type: dynamodb.AttributeType.NUMBER
      },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      encryption: dynamodb.TableEncryption.AWS_MANAGED,
      pointInTimeRecovery: true,
      removalPolicy: RemovalPolicy.RETAIN,
      stream: dynamodb.StreamViewType.NEW_AND_OLD_IMAGES,
    });

    // Lambda function with TypeScript
    const apiHandler = new lambda.NodejsFunction(this, 'ApiHandler', {
      entry: 'src/handlers/api.ts',
      handler: 'handler',
      runtime: Runtime.NODEJS_18_X,
      environment: {
        TABLE_NAME: this.table.tableName,
        STAGE: props.stageName,
      },
      tracing: props.enableTracing ? Tracing.ACTIVE : Tracing.DISABLED,
      logRetention: logs.RetentionDays.ONE_WEEK,
      bundling: {
        minify: true,
        sourceMap: true,
        externalModules: [
          'aws-sdk', // Use the AWS SDK available in Lambda runtime
        ],
      },
    });

    // Grant permissions
    this.table.grantReadWriteData(apiHandler);

    // API Gateway with request validation
    this.api = new apigateway.RestApi(this, 'ServerlessApi', {
      restApiName: `serverless-api-${props.stageName}`,
      description: 'Serverless API with CDK TypeScript',
      deployOptions: {
        stageName: props.stageName,
        tracingEnabled: props.enableTracing,
        dataTraceEnabled: false, // Don't log request/response bodies
        loggingLevel: apigateway.MethodLoggingLevel.INFO,
        metricsEnabled: true,
        throttlingBurstLimit: 1000,
        throttlingRateLimit: 500,
      },
      defaultCorsPreflightOptions: {
        allowOrigins: apigateway.Cors.ALL_ORIGINS,
        allowMethods: apigateway.Cors.ALL_METHODS,
        allowHeaders: ['Content-Type', 'Authorization'],
      },
    });

    // Request Validator
    const validator = new apigateway.RequestValidator(this, 'RequestValidator', {
      restApi: this.api,
      validateRequestBody: true,
      validateRequestParameters: true,
    });

    // Request Models
    const itemModel = this.api.addModel('ItemModel', {
      contentType: 'application/json',
      modelName: 'ItemModel',
      schema: {
        type: apigateway.JsonSchemaType.OBJECT,
        required: ['name', 'description'],
        properties: {
          name: {
            type: apigateway.JsonSchemaType.STRING,
            minLength: 1,
            maxLength: 100,
          },
          description: {
            type: apigateway.JsonSchemaType.STRING,
            maxLength: 500,
          },
          tags: {
            type: apigateway.JsonSchemaType.ARRAY,
            items: {
              type: apigateway.JsonSchemaType.STRING,
            },
          },
        },
      },
    });

    // API Resources and Methods
    const items = this.api.root.addResource('items');
    const item = items.addResource('{id}');

    // Lambda integration
    const integration = new apigateway.LambdaIntegration(apiHandler, {
      requestTemplates: {
        'application/json': '{ "statusCode": "200" }',
      },
    });

    // GET /items
    items.addMethod('GET', integration, {
      requestParameters: {
        'method.request.querystring.limit': false,
        'method.request.querystring.nextToken': false,
      },
    });

    // POST /items
    items.addMethod('POST', integration, {
      requestValidator: validator,
      requestModels: {
        'application/json': itemModel,
      },
    });

    // GET /items/{id}
    item.addMethod('GET', integration, {
      requestParameters: {
        'method.request.path.id': true,
      },
    });

    // PUT /items/{id}
    item.addMethod('PUT', integration, {
      requestValidator: validator,
      requestModels: {
        'application/json': itemModel,
      },
      requestParameters: {
        'method.request.path.id': true,
      },
    });

    // DELETE /items/{id}
    item.addMethod('DELETE', integration, {
      requestParameters: {
        'method.request.path.id': true,
      },
    });

    // Add CloudWatch Dashboard
    this.addMonitoring();
  }

  private addMonitoring() {
    // Add custom CloudWatch dashboard
    // Implementation details...
  }
}
```

## Lambda Handler (TypeScript)

```typescript
// src/handlers/api.ts
import { APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda';
import { DynamoDB } from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

const dynamodb = new DynamoDB.DocumentClient();
const tableName = process.env.TABLE_NAME!;

interface Item {
  id: string;
  timestamp: number;
  name: string;
  description: string;
  tags?: string[];
}

export const handler: APIGatewayProxyHandler = async (event) => {
  console.log('Received event:', JSON.stringify(event, null, 2));

  try {
    switch (event.httpMethod) {
      case 'GET':
        return event.pathParameters?.id
          ? await getItem(event.pathParameters.id)
          : await listItems(event.queryStringParameters);

      case 'POST':
        return await createItem(JSON.parse(event.body || '{}'));

      case 'PUT':
        return await updateItem(
          event.pathParameters!.id,
          JSON.parse(event.body || '{}')
        );

      case 'DELETE':
        return await deleteItem(event.pathParameters!.id);

      default:
        return createResponse(405, { message: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Error:', error);
    return createResponse(500, {
      message: 'Internal server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

async function listItems(queryParams: any): Promise<APIGatewayProxyResult> {
  const limit = queryParams?.limit ? parseInt(queryParams.limit) : 20;

  const params: DynamoDB.DocumentClient.ScanInput = {
    TableName: tableName,
    Limit: limit,
  };

  if (queryParams?.nextToken) {
    params.ExclusiveStartKey = JSON.parse(
      Buffer.from(queryParams.nextToken, 'base64').toString()
    );
  }

  const result = await dynamodb.scan(params).promise();

  return createResponse(200, {
    items: result.Items,
    nextToken: result.LastEvaluatedKey
      ? Buffer.from(JSON.stringify(result.LastEvaluatedKey)).toString('base64')
      : null,
  });
}

async function getItem(id: string): Promise<APIGatewayProxyResult> {
  const result = await dynamodb.query({
    TableName: tableName,
    KeyConditionExpression: 'id = :id',
    ExpressionAttributeValues: {
      ':id': id,
    },
    ScanIndexForward: false,
    Limit: 1,
  }).promise();

  if (!result.Items || result.Items.length === 0) {
    return createResponse(404, { message: 'Item not found' });
  }

  return createResponse(200, result.Items[0]);
}

async function createItem(body: any): Promise<APIGatewayProxyResult> {
  const item: Item = {
    id: uuidv4(),
    timestamp: Date.now(),
    name: body.name,
    description: body.description,
    tags: body.tags,
  };

  await dynamodb.put({
    TableName: tableName,
    Item: item,
  }).promise();

  return createResponse(201, item);
}

async function updateItem(id: string, body: any): Promise<APIGatewayProxyResult> {
  const params: DynamoDB.DocumentClient.UpdateInput = {
    TableName: tableName,
    Key: { id },
    UpdateExpression: 'SET #name = :name, description = :description',
    ExpressionAttributeNames: {
      '#name': 'name',
    },
    ExpressionAttributeValues: {
      ':name': body.name,
      ':description': body.description,
    },
    ReturnValues: 'ALL_NEW',
  };

  if (body.tags) {
    params.UpdateExpression += ', tags = :tags';
    params.ExpressionAttributeValues![':tags'] = body.tags;
  }

  const result = await dynamodb.update(params).promise();
  return createResponse(200, result.Attributes);
}

async function deleteItem(id: string): Promise<APIGatewayProxyResult> {
  await dynamodb.delete({
    TableName: tableName,
    Key: { id },
  }).promise();

  return createResponse(204, null);
}

function createResponse(statusCode: number, body: any): APIGatewayProxyResult {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: body ? JSON.stringify(body) : '',
  };
}
```

## Testing

```typescript
// test/serverless-api.test.ts
import { Template } from 'aws-cdk-lib/assertions';
import { App } from 'aws-cdk-lib';
import { ServerlessApiStack } from '../lib/serverless-api-stack';

describe('ServerlessApiStack', () => {
  test('creates DynamoDB table with encryption', () => {
    const app = new App();
    const stack = new ServerlessApiStack(app, 'TestStack', {
      stageName: 'test',
      tableName: 'test-table',
    });

    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::DynamoDB::Table', {
      SSESpecification: {
        SSEEnabled: true,
      },
      PointInTimeRecoverySpecification: {
        PointInTimeRecoveryEnabled: true,
      },
    });
  });

  test('creates API Gateway with CORS', () => {
    const app = new App();
    const stack = new ServerlessApiStack(app, 'TestStack', {
      stageName: 'test',
      tableName: 'test-table',
    });

    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::ApiGateway::Method', {
      HttpMethod: 'OPTIONS',
    });
  });

  test('Lambda has environment variables', () => {
    const app = new App();
    const stack = new ServerlessApiStack(app, 'TestStack', {
      stageName: 'test',
      tableName: 'test-table',
    });

    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::Lambda::Function', {
      Environment: {
        Variables: {
          TABLE_NAME: 'test-table',
          STAGE: 'test',
        },
      },
    });
  });
});
```

## Deployment

```bash
# Install dependencies
npm install

# Run tests
npm test

# Deploy to development
npx cdk deploy --context stage=dev

# Deploy to production
npx cdk deploy --context stage=prod
```

## Features

✅ **TypeScript** - Full type safety
✅ **API Gateway** - Request validation and CORS
✅ **Lambda** - Bundled with esbuild
✅ **DynamoDB** - Encryption and backups
✅ **Monitoring** - CloudWatch and X-Ray
✅ **Testing** - Unit tests included
✅ **Best Practices** - Security and performance optimized

## Cost Estimation

- API Gateway: ~$3.50 per million requests
- Lambda: ~$0.20 per million requests
- DynamoDB: Pay-per-request pricing
- Total: ~$5-10/month for moderate usage

## Related Patterns

- [GraphQL API Pattern](./graphql-api-pattern.md)
- [WebSocket API Pattern](./websocket-api-pattern.md)
- [Event-Driven Pattern](./event-driven-pattern.md)