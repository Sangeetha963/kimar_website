import * as cdk from 'aws-cdk-lib'
import { SsrClientReact } from '../lib/ssr-client-react'

// このあたりがenvで呼ばれるやつ
const stage = process.env.STAGE ?? 'dev'

const app = new cdk.App()
const baseName = 'base-client-cdk'
const projectName = `${baseName}-${stage}`

new SsrClientReact(app, projectName, {
    env: {
        region: 'ap-northeast-1',
    },
    STAGE: stage,
})
