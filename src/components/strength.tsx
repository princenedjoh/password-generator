import Flex from "@/styles/components/flex"
import Text from "@/styles/components/text"
import { TypographySize } from "@/styles/style.types"
import theme from "@/styles/theme"

const Strength = () => {
    return (
        <div className="flex w-full bg-theme-veryDarkGray p-[20px] justify-between">
            <Flex
                justify='space-between'
            >
                <Text
                    textColor={theme.colors.gray}
                >
                    STRENGTH
                </Text>
                <Flex
                    width='fit-content'
                    align='center'
                >
                    <Text
                        size={TypographySize.HM}
                    >
                        MEDIUM
                    </Text>
                    <Flex
                        width='fit-content'
                        gap={4}
                    >
                        {
                            [1,2,3,4].map((item, index : number) => (
                                <div 
                                    className="h-[20px] w-[8px] border-[1px] border-theme-almostWhite border-solid"
                                    key={index}    
                                >

                                </div>
                            ))
                        }
                    </Flex>
                </Flex>
            </Flex>
        </div>
    )
}
export default Strength