# Awesome CDK TypeScript [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> 🚀 A curated list of awesome AWS CDK TypeScript resources, libraries, tools, and patterns

<div align="center">
  <img src="https://raw.githubusercontent.com/aws/aws-cdk/master/logo/svg/AWS-Cloud-Development-Kit_Icon_64_Squid.svg" alt="AWS CDK Logo" width="100" />
  <img src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.svg" alt="TypeScript Logo" width="100" />
</div>

<p align="center">
  <a href="#contents">Contents</a> •
  <a href="#learning-resources">Learning</a> •
  <a href="#construct-libraries">Constructs</a> •
  <a href="#patterns">Patterns</a> •
  <a href="#tools">Tools</a> •
  <a href="#contributing">Contributing</a>
</p>

---

## Contents

- [Learning Resources](#learning-resources)
  - [Official Resources](#official-resources)
  - [Tutorials & Workshops](#tutorials--workshops)
  - [Videos & Courses](#videos--courses)
  - [Books & Blogs](#books--blogs)
- [Construct Libraries](#construct-libraries)
  - [Official AWS Constructs](#official-aws-constructs)
  - [Community L3 Constructs](#community-l3-constructs)
  - [Serverless](#serverless)
  - [Containers & Kubernetes](#containers--kubernetes)
  - [Data & Analytics](#data--analytics)
  - [Security & Compliance](#security--compliance)
- [Patterns & Examples](#patterns--examples)
  - [Application Patterns](#application-patterns)
  - [Infrastructure Patterns](#infrastructure-patterns)
  - [Multi-Account Patterns](#multi-account-patterns)
- [Tools & Utilities](#tools--utilities)
  - [Development Tools](#development-tools)
  - [Testing Tools](#testing-tools)
  - [Validation & Linting](#validation--linting)
  - [Cost Management](#cost-management)
- [Project Templates](#project-templates)
- [TypeScript Specific](#typescript-specific)
- [Real-World Projects](#real-world-projects)
- [Best Practices](#best-practices)

---

## Learning Resources

### Official Resources

- 📚 [AWS CDK Developer Guide](https://docs.aws.amazon.com/cdk/v2/guide/home.html) - Official documentation
- 📚 [AWS CDK API Reference](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-construct-library.html) - TypeScript API documentation
- 📚 [AWS CDK Examples](https://github.com/aws-samples/aws-cdk-examples/tree/master/typescript) - Official TypeScript examples
- 📚 [CDK Workshop](https://cdkworkshop.com/20-typescript.html) - Official hands-on TypeScript workshop
- 📚 [CDK Patterns](https://cdkpatterns.com/) - Serverless architecture patterns

### Tutorials & Workshops

- 🎓 [CDK Day](https://www.cdkday.com/) - Annual CDK conference with workshops
- 🎓 [ECS Workshop with CDK](https://ecsworkshop.com/introduction/2000-cdk/) - Container patterns with CDK
- 🎓 [CDK Advanced Workshop](https://cdk-advanced.workshop.aws/) - Advanced CDK patterns
- 🎓 [Serverless Stack Tutorial](https://sst.dev/guide.html) - Full-stack serverless with CDK
- 🎓 [CDK Pipelines Workshop](https://www.workshop.aws/categories/CDK%20Pipelines) - CI/CD with CDK

### Videos & Courses

- 🎬 [AWS CDK Crash Course](https://www.youtube.com/watch?v=T-H4nJQyMig) - FreeCodeCamp comprehensive tutorial
- 🎬 [CDK Day Recordings](https://www.youtube.com/c/CDKday/videos) - Conference talks and deep dives
- 🎬 [AWS CDK TypeScript Masterclass](https://www.udemy.com/course/aws-cdk-masterclass/) - Complete Udemy course
- 🎬 [Complete Guide to AWS CDK](https://www.youtube.com/playlist?list=PLOspHqNVtKAC-_ZAGresP-i0okHe5FjcJ) - Tech with Lucy series
- 🎬 [CDK Patterns YouTube](https://www.youtube.com/channel/UCuR3lk5-GZz4X9hbPcKVldQ) - Matt Coulter's pattern videos

### Books & Blogs

- 📖 [The CDK Book](https://thecdkbook.com/) - Comprehensive guide by Matthew Bonig
- 📖 [AWS CDK in Practice](https://www.manning.com/books/aws-cdk-in-practice) - Manning publication
- ✍️ [Matt Coulter's Blog](https://blog.mattcoulter.com/) - CDK patterns and best practices
- ✍️ [Thorsten Hoeger's Blog](https://taimos.de/) - Advanced CDK topics
- ✍️ [AWS DevOps Blog CDK Posts](https://aws.amazon.com/blogs/devops/tag/aws-cdk/) - Official AWS blog posts

---

## Construct Libraries

### Official AWS Constructs

- 📦 [aws-cdk-lib](https://www.npmjs.com/package/aws-cdk-lib) - Main CDK library (L1 & L2 constructs)
- 📦 [@aws-cdk/aws-apigatewayv2-alpha](https://www.npmjs.com/package/@aws-cdk/aws-apigatewayv2-alpha) - API Gateway v2 constructs
- 📦 [@aws-cdk/aws-appsync-alpha](https://www.npmjs.com/package/@aws-cdk/aws-appsync-alpha) - AppSync constructs
- 📦 [@aws-cdk/aws-lambda-python-alpha](https://www.npmjs.com/package/@aws-cdk/aws-lambda-python-alpha) - Python Lambda constructs

### Community L3 Constructs

#### High-Level Patterns
- 📦 [cdk-patterns](https://github.com/cdk-patterns/serverless) - Serverless architecture patterns
- 📦 [aws-solutions-constructs](https://github.com/awslabs/aws-solutions-constructs) - AWS Solutions Builder patterns
- 📦 [cdk-monitoring-constructs](https://github.com/cdklabs/cdk-monitoring-constructs) - Monitoring and alerting constructs
- 📦 [cdk-watchful](https://github.com/cdklabs/cdk-watchful) - Automatic dashboards and alarms
- 📦 [cdk-nag](https://github.com/cdklabs/cdk-nag) - Security and compliance checks

### Serverless

- 📦 [aws-lambda-nodejs](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_lambda_nodejs-readme.html) - Node.js Lambda with esbuild
- 📦 [cdk-lambda-powertools](https://github.com/aws-powertools/powertools-lambda-typescript) - Lambda Powertools for TypeScript
- 📦 [cdk-serverless-clamscan](https://github.com/dontirun/cdk-serverless-clamscan) - Virus scanning for S3
- 📦 [cdk-lambda-extensions](https://github.com/fourTheorem/cdk-lambda-extensions) - Lambda extensions constructs
- 📦 [cdk-appsync-transformer](https://github.com/kcwinner/cdk-appsync-transformer) - AppSync schema transformers

### Containers & Kubernetes

- 📦 [cdk8s](https://cdk8s.io/) - CDK for Kubernetes
- 📦 [cdk-ecs-codedeploy](https://github.com/cdklabs/cdk-ecs-codedeploy) - Blue/Green deployments for ECS
- 📦 [ecs-patterns](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_ecs_patterns-readme.html) - Common ECS patterns
- 📦 [eks-blueprints](https://github.com/aws-quickstart/cdk-eks-blueprints) - EKS cluster patterns
- 📦 [cdk-docker-image-deployment](https://github.com/cdklabs/cdk-docker-image-deployment) - Deploy Docker images to ECR

### Data & Analytics

- 📦 [aws-glue-alpha](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-glue-alpha-readme.html) - Glue constructs
- 📦 [aws-kinesisanalytics-flink-alpha](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-kinesisanalytics-flink-alpha-readme.html) - Kinesis Analytics
- 📦 [cdk-redshift-serverless](https://github.com/aws-samples/redshift-serverless-cdk) - Redshift Serverless patterns
- 📦 [cdk-athena-workgroup](https://github.com/udondan/cdk-athena-workgroup) - Athena workgroups
- 📦 [aws-datalake-factory](https://github.com/aws-samples/aws-datalake-factory) - Data Lake patterns

### Security & Compliance

- 📦 [cdk-security-group](https://github.com/robertd/cdk-security-group) - Type-safe security groups
- 📦 [cdk-backup-plan](https://github.com/kevinslin/cdk-backup-plan) - AWS Backup plans
- 📦 [cdk-iam-floyd](https://github.com/udondan/cdk-iam-floyd) - Type-safe IAM policies
- 📦 [cdk-secrets-manager](https://github.com/udondan/cdk-secrets-manager) - Secrets rotation
- 📦 [cdk-sops-secrets](https://github.com/isotoma/cdk-sops-secrets) - SOPS integration

---

## Patterns & Examples

### Application Patterns

#### Serverless Applications
- 🏗️ [Serverless API](https://github.com/aws-samples/aws-cdk-examples/tree/master/typescript/api-gateway-lambda) - API Gateway + Lambda
- 🏗️ [GraphQL API](https://github.com/aws-samples/aws-cdk-examples/tree/master/typescript/appsync-graphql-dynamodb) - AppSync + DynamoDB
- 🏗️ [Event-Driven Architecture](https://github.com/aws-samples/aws-cdk-examples/tree/master/typescript/eventbridge-lambda) - EventBridge patterns
- 🏗️ [Step Functions Workflow](https://github.com/aws-samples/aws-cdk-examples/tree/master/typescript/stepfunctions) - State machines
- 🏗️ [SQS Lambda Processor](https://github.com/aws-samples/aws-cdk-examples/tree/master/typescript/sqs-lambda) - Queue processing

#### Web Applications
- 🏗️ [Static Website](https://github.com/aws-samples/aws-cdk-examples/tree/master/typescript/static-site) - S3 + CloudFront
- 🏗️ [Next.js App](https://github.com/serverless-stack/sst/tree/master/examples/nextjs-app) - SST Next.js deployment
- 🏗️ [Full-Stack App](https://github.com/aws-samples/aws-cdk-examples/tree/master/typescript/full-stack) - React + API + Database

### Infrastructure Patterns

#### Networking
- 🏗️ [VPC Best Practices](https://github.com/aws-samples/aws-cdk-examples/tree/master/typescript/vpc) - VPC patterns
- 🏗️ [Transit Gateway](https://github.com/aws-samples/aws-transit-gateway-overlapping-cidrs) - Network hub
- 🏗️ [PrivateLink](https://github.com/aws-samples/aws-privatelink-interface-endpoint-cdk) - Private endpoints

#### CI/CD
- 🏗️ [CDK Pipelines](https://github.com/aws-samples/cdk-pipelines-demo) - Self-mutating pipelines
- 🏗️ [GitHub Actions](https://github.com/aws-actions/aws-cdk-action) - CDK GitHub Actions
- 🏗️ [GitLab CI](https://github.com/aws-samples/aws-cdk-gitlab-cicd) - GitLab integration

### Multi-Account Patterns

- 🏗️ [Control Tower](https://github.com/aws-samples/aws-control-tower-customizations) - Account vending
- 🏗️ [Organizations](https://github.com/aws-samples/aws-organizations-cdk) - Multi-account setup
- 🏗️ [Cross-Account Roles](https://github.com/aws-samples/cross-account-role-cdk) - Cross-account access

---

## Tools & Utilities

### Development Tools

- 🛠️ [Projen](https://github.com/projen/projen) - Project generation and management
- 🛠️ [CDK Dia](https://github.com/pistazie/cdk-dia) - Diagram generation
- 🛠️ [CDK Watch Mode](https://docs.aws.amazon.com/cdk/v2/guide/work-with-cdk-typescript.html) - Hot reload deployments
- 🛠️ [CDK Diff](https://github.com/aws/aws-cdk/tree/master/packages/cdk-diff) - Stack diff tool
- 🛠️ [CDK Resource Import](https://docs.aws.amazon.com/cdk/v2/guide/resource-import.html) - Import existing resources

### Testing Tools

- 🧪 [CDK Assertions](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.assertions-readme.html) - Built-in testing framework
- 🧪 [cdk-test](https://github.com/cdklabs/cdk-test) - Testing utilities
- 🧪 [Template Matcher](https://github.com/aws/aws-cdk/tree/master/packages/@aws-cdk/assert) - Template assertions
- 🧪 [LocalStack](https://github.com/localstack/localstack) - Local AWS environment
- 🧪 [CDK Local](https://github.com/localstack/aws-cdk-local) - CDK with LocalStack

### Validation & Linting

- ✅ [cdk-nag-linting](https://constructs.dev/packages/cdk-nag) - Best practice checks
- ✅ [cfn-lint](https://github.com/aws-cloudformation/cfn-lint) - CloudFormation linting
- ✅ [cdk-validator-cfnguard](https://github.com/cdklabs/cdk-validator-cfnguard) - Policy validation
- ✅ [Checkov](https://github.com/bridgecrewio/checkov) - Security scanning
- ✅ [KICS](https://github.com/Checkmarx/kics) - Infrastructure scanning

### Cost Management

- 💰 [Infracost](https://github.com/infracost/infracost) - Cost estimation
- 💰 [AWS Cost Explorer](https://github.com/aws-samples/aws-cost-explorer-report-cdk) - Cost reporting
- 💰 [cdk-cost-estimation](https://github.com/aws-samples/aws-cdk-cost-estimation) - Cost estimates

---

## Project Templates

### Starter Templates

- 📝 [cdk-typescript-template](https://github.com/aws-samples/aws-cdk-typescript-template) - Basic template
- 📝 [cdk-monorepo-template](https://github.com/aws-samples/aws-cdk-monorepo-example) - Monorepo structure
- 📝 [projen-cdk-template](https://github.com/projen/projen/tree/main/src/awscdk) - Projen CDK apps
- 📝 [nx-aws-cdk](https://github.com/tienne/nx-plugins/tree/main/packages/nx-aws-cdk) - Nx monorepo plugin
- 📝 [turborepo-cdk](https://github.com/aws-samples/turborepo-cdk-example) - Turborepo template

### Organization Templates

- 📝 [AWS Organization Template](https://github.com/aws-samples/aws-organization-cdk-template) - Multi-account setup
- 📝 [Landing Zone Template](https://github.com/aws-samples/aws-landing-zone-cdk) - Landing zone
- 📝 [Baseline Template](https://github.com/aws-samples/aws-baseline-cdk) - Security baseline

---

## TypeScript Specific

### Type Safety Patterns

```typescript
// Type-safe environment configuration
interface EnvironmentConfig {
  account: string;
  region: string;
  vpc: {
    cidr: string;
    maxAzs: number;
  };
}

class TypeSafeStack extends Stack {
  constructor(scope: Construct, id: string, config: EnvironmentConfig) {
    super(scope, id, {
      env: {
        account: config.account,
        region: config.region,
      }
    });
    // Use strongly typed config
  }
}
```

### Generic Constructs

```typescript
// Reusable generic construct
export class RestApi<T extends Record<string, any>> extends Construct {
  public readonly api: IRestApi;

  constructor(scope: Construct, id: string, props: RestApiProps<T>) {
    super(scope, id);
    // Implementation with type safety
  }
}
```

### Advanced Patterns

- 📚 [Dependency Injection](https://github.com/aws-samples/aws-cdk-dependency-injection) - DI patterns
- 📚 [Aspect-Oriented Programming](https://github.com/aws-samples/aws-cdk-aspects-examples) - Using CDK Aspects
- 📚 [Custom Resources](https://github.com/aws-samples/aws-cdk-custom-resources) - TypeScript custom resources
- 📚 [Factory Patterns](https://github.com/aws-samples/aws-cdk-factory-pattern) - Construct factories
- 📚 [Builder Patterns](https://github.com/aws-samples/aws-cdk-builder-pattern) - Fluent interfaces

### TypeScript Configuration

```json
// Recommended tsconfig.json for CDK projects
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020"],
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "declaration": true,
    "declarationMap": true,
    "inlineSourceMap": true,
    "experimentalDecorators": true,
    "strictPropertyInitialization": false,
    "typeRoots": ["./node_modules/@types"]
  },
  "exclude": ["cdk.out", "node_modules"]
}
```

---

## Real-World Projects

### Open Source Applications

- 🌟 [Construct Hub](https://github.com/cdklabs/construct-hub) - CDK construct discovery platform
- 🌟 [Serverless Stack (SST)](https://github.com/serverless-stack/sst) - Full-stack serverless framework
- 🌟 [AWS Controllers for Kubernetes](https://github.com/aws-controllers-k8s/community) - Kubernetes controllers
- 🌟 [Serverless Airline](https://github.com/aws-samples/aws-serverless-airline-booking) - Demo airline app
- 🌟 [AWS Solutions Implementations](https://aws.amazon.com/solutions/implementations/) - Production-ready solutions

### Company Case Studies

- 📋 [Liberty Mutual](https://www.youtube.com/watch?v=AaJSV2J9XL4) - Large-scale CDK adoption
- 📋 [Convoy](https://convoy.com/blog/convoy-aws-cdk/) - Migration to CDK
- 📋 [Stedi](https://www.stedi.com/blog/deploying-a-serverless-api-in-minutes-with-cdk) - Serverless APIs
- 📋 [Carsales](https://aws.amazon.com/blogs/devops/how-carsales-adopted-aws-cdk/) - CDK adoption journey
- 📋 [RENGA](https://aws.amazon.com/blogs/startups/how-renga-inc-uses-aws-cdk/) - Startup CDK usage

---

## Best Practices

### Project Structure

```
my-cdk-app/
├── bin/              # CDK app entry points
├── lib/              # Stack definitions
│   ├── constructs/   # Custom constructs
│   ├── stacks/       # Stack classes
│   └── shared/       # Shared utilities
├── test/             # Unit tests
├── scripts/          # Helper scripts
├── config/           # Environment configs
└── docs/             # Documentation
```

### Stack Organization

```typescript
// Organize stacks by lifecycle and dependencies
export class NetworkStack extends Stack { }
export class DataStack extends Stack { }
export class ComputeStack extends Stack { }
export class MonitoringStack extends Stack { }
```

### Testing Strategy

- ✅ **Unit Tests** - Test construct properties
- ✅ **Snapshot Tests** - Catch unintended changes
- ✅ **Fine-Grained Assertions** - Test specific resources
- ✅ **Integration Tests** - Test deployed resources
- ✅ **Compliance Tests** - Security and compliance checks

### Security Best Practices

- 🔒 Use least-privilege IAM policies
- 🔒 Enable encryption at rest and in transit
- 🔒 Use Secrets Manager for sensitive data
- 🔒 Enable AWS CloudTrail logging
- 🔒 Implement resource tagging strategies
- 🔒 Use CDK Nag for compliance checking

### Cost Optimization

- 💡 Use cost allocation tags
- 💡 Implement auto-scaling policies
- 💡 Use Spot instances where appropriate
- 💡 Set up billing alarms
- 💡 Regular cost reviews with Infracost

---

## Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Criteria for Inclusion

- Must be TypeScript-specific or have excellent TypeScript support
- Active maintenance (commits within last 6 months)
- Clear documentation
- Adds value to the CDK TypeScript ecosystem


<div align="center">
  <sub>Built with ❤️ by the CDK TypeScript community</sub>
</div>
