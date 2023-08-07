import { CodeGenerator } from '@himenon/openapi-typescript-code-generator'
import { TsGenerator } from '@himenon/openapi-typescript-code-generator/api'
import * as Templates from '@himenon/openapi-typescript-code-generator/templates'
import type * as Types from '@himenon/openapi-typescript-code-generator/types'
import * as fs from 'fs'

const factory = TsGenerator.Factory.create()

const main = () => {
    const codeGenerator = new CodeGenerator('./swagger.yaml')

    const apiClientGeneratorTemplate: Types.CodeGenerator.CustomGenerator<Templates.ApiClient.Option> = {
        generator: Templates.ApiClient.generator,
        option: {},
    }

    const typeDefCode = codeGenerator.generateTypeDefinition()
    const apiClientCode = codeGenerator.generateCode([
        {
            generator: () => {
                return [`import { Schemas } from "./types";`]
            },
        },
        codeGenerator.getAdditionalTypeDefinitionCustomCodeGenerator(),
        apiClientGeneratorTemplate,
    ])

    fs.writeFileSync('./src/apis/types.ts', typeDefCode, { encoding: 'utf-8' })
    fs.writeFileSync('./src/apis/apiClient.ts', apiClientCode, { encoding: 'utf-8' })
}

main()
