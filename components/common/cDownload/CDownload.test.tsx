import { act, render } from '@testing-library/react'
import { vi } from 'vitest'

import { CDownload } from './CDownload'
import { createQueryWrapper } from '@/test/utils/create-query-wrapper'

describe('CDownload', () => {
    // Create stub
    const { queryClient, queryWrapper } = createQueryWrapper()
    // Set a constant values to initialize react-query
    // e.g.
    queryClient.setQueryData(['sample-key'], { data: 'sample' })

    afterEach(() => {
        vi.clearAllMocks()
    })

    describe('logic', () => {
        test('ADD_YOUR_TESTS', async () => {
            // Arrange
            // const rendered = renderHook(() => useCDownload(), { wrapper: queryWrapper }).result

            // Act
            await act(async () => {})

            // Assert
        })
    })

    describe('view', () => {
        test('should be rendered', async () => {
            // Arrange
            const { getByTestId } = render(<CDownload />, { wrapper: queryWrapper })
            const element = getByTestId('c-download')

            // Assert
            expect(element).toBeInTheDocument()
        })

        test('ADD_YOUR_TESTS', async () => {
            // Arrange

            // Act
            await act(async () => {})

            // Assert
        })
    })
})
