import { Meta, StoryObj } from '@storybook/react'

import { CDownload, CDownloadProps } from './CDownload'

export default {
    title: 'common/cDownload',
    component: CDownload,
} as Meta<CDownloadProps>

export const Default: StoryObj<typeof CDownload> = {
    args: {},
}
