import { aws_cloudfront, aws_iam, aws_s3, CfnOutput, Duration, RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib'
import { Deployment, LambdaIntegration, RestApi, Stage } from 'aws-cdk-lib/aws-apigateway'
import { Architecture, Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda'
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment'
import { Construct } from 'constructs'

export type ApiGatewayProps = { STAGE: string }

export class SsrClientReact extends Stack {
    constructor(scope: Construct, id: string, props: StackProps & ApiGatewayProps) {
        super(scope, id, props)

        // Create Api Gateway
        const api = new RestApi(this, 'serverless-rest-api', {
            restApiName: id,
        })
        const deployment = new Deployment(this, 'deployment', { api })
        api.deploymentStage = new Stage(this, 'stage', {
            stageName: props.STAGE,
            deployment,
        })

        // Create S3 bucket for assets files
        const assetsBucket = new aws_s3.Bucket(this, `assets-bucket`, {
            bucketName: `${id}-assets`,
            removalPolicy: RemovalPolicy.DESTROY,
        })

        // Deployment for assets
        new BucketDeployment(this, 'bucket-deployment', {
            sources: [Source.asset('../dist/client')],
            destinationBucket: assetsBucket,
        })

        // Create OAI for assets and set to bucket policy
        const originAccessIdentity = new aws_cloudfront.OriginAccessIdentity(this, `assets-s3-oai`)
        const assetsBucketPolicyStatement = new aws_iam.PolicyStatement({
            actions: ['s3:GetObject'],
            effect: aws_iam.Effect.ALLOW,
            principals: [
                new aws_iam.CanonicalUserPrincipal(originAccessIdentity.cloudFrontOriginAccessIdentityS3CanonicalUserId),
            ],
            resources: [`${assetsBucket.bucketArn}/*`],
        })
        assetsBucket.addToResourcePolicy(assetsBucketPolicyStatement)

        // Create ssr lambda function
        const handler = new Function(this, 'default-handler', {
            functionName: `${id}-handler`,
            code: Code.fromAsset('../.bundle'),
            handler: 'index.handler',
            runtime: Runtime.NODEJS_18_X,
            architecture: Architecture.ARM_64,
            timeout: Duration.seconds(30),
            environment: {
                STAGE: props.STAGE,
                NODE_ENV: 'production',
                NODE_OPTIONS: '--enable-source-maps',
            },
            memorySize: 128,
        })

        // Bind Handler function to API Gateway
        api.root.addMethod('GET', new LambdaIntegration(handler))
        api.root.addResource('{proxy+}').addMethod('GET', new LambdaIntegration(handler))

        // Export params
        new CfnOutput(this, 'AssetsBucketName', { value: assetsBucket.bucketName })
        new CfnOutput(this, 'ApiGatewayRestApi', { value: api.restApiId })
        new CfnOutput(this, 'ServiceEndpoint', { value: api.url })
        new CfnOutput(this, 'HandlerLambdaFunctionQualifiedArn', { value: handler.currentVersion.functionArn })
        new CfnOutput(this, 'OriginAccessIdentity', {
            value: `origin-access-identity/cloudfront/${originAccessIdentity.originAccessIdentityId}`,
        })
    }
}
