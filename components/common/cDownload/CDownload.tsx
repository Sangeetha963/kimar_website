import { ChevronDownIcon } from '@chakra-ui/icons'
import {
    Box,
    Button,
    Center,
    // Container,
    Flex,
    FormControl,
    FormLabel,
    Hide,
    Image,
    Input,
    Select,
    Show,
    Spacer,
    Text,
    // useBreakpointValue,
} from '@chakra-ui/react'

import type { FC, ReactNode } from 'react'

// import stroke from '~/assets/images/Stroke 1.svg'
import tick from '~/assets/images/tick.png'
import { NsPropTypeBase } from '~/types/ns-prop-type-base'

export type CDownloadProps = {
    children?: ReactNode
} & NsPropTypeBase

// logic
export const useCDownload = () => {
    return {}
}

// view
export const CDownloadView: FC<CDownloadProps & ReturnType<typeof useCDownload>> = () => {
    // const {
    //     isDesktop,
    // } = useCDownload()

    return (
        <>
            {/* <span data-testid="c-download"></span> */}
            <Box bg={'white'} py={[20, 5]}>
                <Flex justify={'center'} pt={['0.5rem', '6.25rem']}>
                    <Image src={tick} width={'40px'} alt={'tick'} />
                </Flex>
                <Center
                    fontSize={['1.5rem', '2rem']}
                    lineHeight={['2.25rem', '3rem']}
                    letterSpacing={'0.29rem'}
                    pb={'2.375rem'}
                    mx={['1.5rem', '0']}>
                    <Hide below="sm">かんたん入力で今すぐ資料ダウンロード</Hide>
                    <Show below="sm">
                        <Text align={'center'} color={'#007A78'} fontSize={'1.5rem'}>
                            かんたん入力で
                            <Spacer />
                            今すぐ資料ダウンロード
                        </Text>
                    </Show>
                </Center>

                <Center mx={['1.5rem', '0']}>
                    <Box
                        backgroundColor={'#DFF5F4'}
                        px={['1rem', '9.875rem']}
                        width={{ base: '20.438rem', sm: '40.625rem', md: '42rem', lg: '48rem', xl: '72rem', '2xl': '75rem' }}
                        borderRadius={'1rem'}>
                        <FormControl mb={'2rem'} lineHeight={'1.5rem'} letterSpacing={'0.294rem'}>
                            <FormLabel mt={['2rem', '5rem']} fontSize={['0.875rem', '1.125rem']}>
                                会社名{' '}
                                <Text
                                    ml={-1}
                                    py={1}
                                    pl={1}
                                    as={'span'}
                                    backgroundColor={'#F3CC71'}
                                    borderRadius={'0.25rem'}
                                    letterSpacing={'0.294rem'}
                                    lineHeight={'1.125rem'}
                                    fontSize={['0.75rem', '0.875rem']}>
                                    必須
                                </Text>
                            </FormLabel>
                            <Input
                                type="text"
                                backgroundColor={'white'}
                                height={['56px', '64px']}
                                my={[1, 2]}
                                borderRadius={'0.5rem'}
                                mb={['1rem', '1.5rem']}
                            />
                            <FormLabel fontSize={['0.875rem', '1.125rem']}>
                                お名前{' '}
                                <Text
                                    ml={-1}
                                    py={1}
                                    pl={1}
                                    as={'span'}
                                    backgroundColor={'#F3CC71'}
                                    borderRadius={'0.25rem'}
                                    letterSpacing={'0.294rem'}
                                    lineHeight={'1.125rem'}
                                    fontSize={['0.75rem', '0.875rem']}>
                                    {' '}
                                    必須
                                </Text>
                            </FormLabel>

                            <Input
                                type="text"
                                backgroundColor={'white'}
                                height={['3.5rem', '4rem']}
                                my={[1, 2]}
                                borderRadius={'0.5rem'}
                                mb={['1rem', '1.5rem']}
                            />
                            <Hide below="sm">
                                <FormLabel fontSize={['0.875rem', '1.125rem']}>職位</FormLabel>
                                <Input
                                    type="text"
                                    backgroundColor={'white'}
                                    height={['3.5rem', '4rem']}
                                    my={[1, 2]}
                                    borderRadius={'0.5rem'}
                                    mb={['0.875rem', '1.5rem']}
                                />
                            </Hide>

                            <Show below="sm">
                                <FormLabel fontSize={['0.875rem', '1.125rem']}>
                                    職位{' '}
                                    <Text
                                        ml={-1}
                                        py={1}
                                        pl={1}
                                        as={'span'}
                                        backgroundColor={'#F3CC71'}
                                        borderRadius={'0.25rem'}
                                        letterSpacing={'0.294rem'}
                                        lineHeight={'1.125rem'}
                                        fontSize={['0.75rem', '0.875rem']}>
                                        {' '}
                                        必須
                                    </Text>
                                </FormLabel>
                                <Input
                                    type="text"
                                    backgroundColor={'white'}
                                    height={['3.5rem', '4rem']}
                                    my={[1, 2]}
                                    borderRadius={'0.5rem'}
                                    mb={['1rem', '1.5rem']}
                                />
                            </Show>

                            <FormLabel fontSize={['0.875rem', '1.125rem']}>
                                メールアドレス{' '}
                                <Text
                                    ml={-1}
                                    py={1}
                                    pl={1}
                                    as={'span'}
                                    backgroundColor={'#F3CC71'}
                                    borderRadius={'0.25rem'}
                                    letterSpacing={'0.294rem'}
                                    lineHeight={'1.125rem'}
                                    fontSize={['0.75rem', '0.875rem']}>
                                    {' '}
                                    必須
                                </Text>
                            </FormLabel>
                            <Input
                                type="text"
                                backgroundColor={'white'}
                                height={['3.5rem', '4rem']}
                                my={[1, 2]}
                                borderRadius={'0.5rem'}
                                mb={['1rem', '1.5rem']}
                            />
                            <FormLabel fontSize={['0.875rem', '1.125rem']}>
                                電話番号{' '}
                                <Text
                                    ml={-1}
                                    py={1}
                                    pl={1}
                                    as={'span'}
                                    backgroundColor={'#F3CC71'}
                                    borderRadius={'0.25rem'}
                                    letterSpacing={'0.294rem'}
                                    lineHeight={'1.125rem'}
                                    fontSize={['0.75rem', '0.875rem']}>
                                    {' '}
                                    必須
                                </Text>
                            </FormLabel>
                            <Input
                                type="text"
                                backgroundColor={'white'}
                                height={['3.5rem', '4rem']}
                                my={{ base: 1, lg: 2 }}
                                borderRadius={'0.5rem'}
                                mb={['1rem', '1.5rem']}
                            />
                            <Hide below="sm">
                                <FormLabel fontSize={['0.875rem', '1.125rem']} ml={-1} py={1} pl={1} mt={'0.938rem'}>
                                    業務課題をご記入ください
                                </FormLabel>
                            </Hide>
                            <Show below="sm">
                                <FormLabel fontSize={['0.875rem', '1.125rem']}>
                                    業務課題をご記入ください{' '}
                                    <Text
                                        ml={-1}
                                        py={1}
                                        pl={1}
                                        as={'span'}
                                        backgroundColor={'#F3CC71'}
                                        borderRadius={'0.25rem'}
                                        letterSpacing={'0.294rem'}
                                        lineHeight={'1.125rem'}
                                        fontSize={['0.75rem', '0.875rem']}>
                                        {' '}
                                        必須
                                    </Text>
                                </FormLabel>
                            </Show>

                            <Show above="sm">
                                <Select
                                    // icon={<Image src={stroke} width={'-27px'} height={'14px'} />}

                                    icon={<ChevronDownIcon width={'12.938rem'} height={'0.875rem'} />}
                                    iconColor={'#007A78'}
                                    iconSize={'30'}
                                    placeholder="選択してください"
                                    backgroundColor={'white'}
                                    height={['3.5rem', '4rem']}
                                    my={[1, 2]}
                                    borderRadius={'0.5rem'}>
                                    {/* <Image src={stroke} /> */}
                                </Select>
                            </Show>
                            <Show below="sm">
                                <Box backgroundColor={'white'} height={['3.5rem', '4rem']} my={[1, 2]} borderRadius={'0.5rem'}>
                                    {/* ssdde */}
                                </Box>
                            </Show>
                        </FormControl>
                        <Flex justify={'center'}>
                            <Button
                                textColor={'#303030'}
                                fontSize={['20px']}
                                backgroundColor={'#F3CC71'}
                                mt={[0, '1.5rem']}
                                mb={['1.875rem', '5rem']}
                                height={'4.375rem'}
                                width={'37.5rem'}
                                borderRadius={'2.188rem'}>
                                資料ダウンロード
                            </Button>
                        </Flex>
                    </Box>
                </Center>
                <Spacer mb={['3.125rem', '8.75rem']} />
            </Box>
        </>
    )
}

// component
export const CDownload: FC<CDownloadProps> = (props: CDownloadProps) => {
    const hookItems = useCDownload()
    return <CDownloadView {...props} {...hookItems} />
}
