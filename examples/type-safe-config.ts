/**
 * Type-Safe Configuration Pattern for CDK TypeScript
 *
 * This example shows how to create type-safe environment configurations
 * that can be validated at compile time.
 */

import { App, Stack, StackProps, Environment } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as rds from 'aws-cdk-lib/aws-rds';
import * as s3 from 'aws-cdk-lib/aws-s3';

// Define environment types
type EnvironmentName = 'dev' | 'staging' | 'prod';

// Configuration schema with strict typing
interface AppConfig {
  environment: EnvironmentName;
  aws: {
    account: string;
    region: string;
  };
  vpc: {
    maxAzs: number;
    natGateways: number;
    cidr: string;
  };
  database: {
    instanceClass: ec2.InstanceClass;
    instanceSize: ec2.InstanceSize;
    allocatedStorage: number;
    backupRetention: number;
    multiAz: boolean;
  };
  storage: {
    bucketName: string;
    versioned: boolean;
    lifecycleRules: boolean;
  };
  tags: Record<string, string>;
}

// Environment-specific configurations
const configs: Record<EnvironmentName, AppConfig> = {
  dev: {
    environment: 'dev',
    aws: {
      account: '123456789012',
      region: 'us-east-1',
    },
    vpc: {
      maxAzs: 2,
      natGateways: 1,
      cidr: '10.0.0.0/16',
    },
    database: {
      instanceClass: ec2.InstanceClass.T3,
      instanceSize: ec2.InstanceSize.MICRO,
      allocatedStorage: 20,
      backupRetention: 1,
      multiAz: false,
    },
    storage: {
      bucketName: 'my-app-dev-bucket',
      versioned: false,
      lifecycleRules: false,
    },
    tags: {
      Environment: 'Development',
      CostCenter: 'Engineering',
      ManagedBy: 'CDK',
    },
  },
  staging: {
    environment: 'staging',
    aws: {
      account: '123456789013',
      region: 'us-east-1',
    },
    vpc: {
      maxAzs: 2,
      natGateways: 2,
      cidr: '10.1.0.0/16',
    },
    database: {
      instanceClass: ec2.InstanceClass.T3,
      instanceSize: ec2.InstanceSize.SMALL,
      allocatedStorage: 50,
      backupRetention: 7,
      multiAz: false,
    },
    storage: {
      bucketName: 'my-app-staging-bucket',
      versioned: true,
      lifecycleRules: true,
    },
    tags: {
      Environment: 'Staging',
      CostCenter: 'Engineering',
      ManagedBy: 'CDK',
    },
  },
  prod: {
    environment: 'prod',
    aws: {
      account: '123456789014',
      region: 'us-east-1',
    },
    vpc: {
      maxAzs: 3,
      natGateways: 3,
      cidr: '10.2.0.0/16',
    },
    database: {
      instanceClass: ec2.InstanceClass.M5,
      instanceSize: ec2.InstanceSize.LARGE,
      allocatedStorage: 100,
      backupRetention: 30,
      multiAz: true,
    },
    storage: {
      bucketName: 'my-app-prod-bucket',
      versioned: true,
      lifecycleRules: true,
    },
    tags: {
      Environment: 'Production',
      CostCenter: 'Operations',
      ManagedBy: 'CDK',
      Compliance: 'SOC2',
    },
  },
};

// Type-safe configuration loader
class ConfigLoader {
  static load(environment: EnvironmentName): AppConfig {
    const config = configs[environment];
    if (!config) {
      throw new Error(`Configuration not found for environment: ${environment}`);
    }
    return this.validate(config);
  }

  private static validate(config: AppConfig): AppConfig {
    // Add runtime validation if needed
    if (!config.aws.account.match(/^\d{12}$/)) {
      throw new Error('Invalid AWS account number');
    }
    if (config.vpc.natGateways > config.vpc.maxAzs) {
      throw new Error('NAT gateways cannot exceed max AZs');
    }
    return config;
  }
}

// Generic stack with type-safe props
interface TypeSafeStackProps extends StackProps {
  config: AppConfig;
}

class TypeSafeStack extends Stack {
  constructor(scope: Construct, id: string, props: TypeSafeStackProps) {
    super(scope, id, props);

    const { config } = props;

    // Create VPC with type-safe config
    const vpc = new ec2.Vpc(this, 'VPC', {
      maxAzs: config.vpc.maxAzs,
      natGateways: config.vpc.natGateways,
      ipAddresses: ec2.IpAddresses.cidr(config.vpc.cidr),
    });

    // Create RDS instance with type-safe config
    const database = new rds.DatabaseInstance(this, 'Database', {
      engine: rds.DatabaseInstanceEngine.postgres({
        version: rds.PostgresEngineVersion.VER_14_6,
      }),
      instanceType: ec2.InstanceType.of(
        config.database.instanceClass,
        config.database.instanceSize
      ),
      vpc,
      allocatedStorage: config.database.allocatedStorage,
      backupRetention: cdk.Duration.days(config.database.backupRetention),
      multiAz: config.database.multiAz,
    });

    // Create S3 bucket with type-safe config
    const bucket = new s3.Bucket(this, 'Bucket', {
      bucketName: config.storage.bucketName,
      versioned: config.storage.versioned,
      lifecycleRules: config.storage.lifecycleRules
        ? [{
            id: 'delete-old-versions',
            noncurrentVersionExpiration: cdk.Duration.days(90),
          }]
        : undefined,
    });

    // Apply tags from config
    Object.entries(config.tags).forEach(([key, value]) => {
      cdk.Tags.of(this).add(key, value);
    });
  }
}

// Factory pattern for creating environment-specific stacks
class StackFactory {
  static createStack(
    app: App,
    environment: EnvironmentName
  ): TypeSafeStack {
    const config = ConfigLoader.load(environment);

    return new TypeSafeStack(app, `MyApp-${config.environment}-Stack`, {
      config,
      env: {
        account: config.aws.account,
        region: config.aws.region,
      },
    });
  }
}

// Usage with compile-time type checking
const app = new App();

// Get environment from context
const environment = app.node.tryGetContext('environment') as EnvironmentName;

if (!environment || !['dev', 'staging', 'prod'].includes(environment)) {
  throw new Error('Please specify environment: npx cdk deploy -c environment=dev');
}

// Create stack with type-safe configuration
const stack = StackFactory.createStack(app, environment);

// Advanced: Type-safe feature flags
interface FeatureFlags {
  enableMonitoring: boolean;
  enableAutoScaling: boolean;
  enableDisasterRecovery: boolean;
}

const featureFlags: Record<EnvironmentName, FeatureFlags> = {
  dev: {
    enableMonitoring: false,
    enableAutoScaling: false,
    enableDisasterRecovery: false,
  },
  staging: {
    enableMonitoring: true,
    enableAutoScaling: false,
    enableDisasterRecovery: false,
  },
  prod: {
    enableMonitoring: true,
    enableAutoScaling: true,
    enableDisasterRecovery: true,
  },
};

// Type-safe feature flag checker
function isFeatureEnabled<K extends keyof FeatureFlags>(
  environment: EnvironmentName,
  feature: K
): boolean {
  return featureFlags[environment][feature];
}

// Usage
if (isFeatureEnabled(environment, 'enableMonitoring')) {
  // Add monitoring resources
  // TypeScript knows this is a boolean
}