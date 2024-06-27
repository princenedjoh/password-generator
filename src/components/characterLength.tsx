'use client'

import { useState } from "react"
import CustomSlider from "./UI/slider"
import Flex from "@/styles/components/flex"
import Text from "@/styles/components/text"
import { TypographySize } from "@/styles/style.types"
import theme from "@/styles/theme"

const CharacterLength = () => {
    const [passwordLength, setPasswordLength] = useState(8)

    return (
        <Flex
            direction="column"
            gap={0.1}
        >
            <Flex
                justify="space-between"
                align="center"
            >
                <Text>
                    Character Length
                </Text>
                <Text
                    size={TypographySize.HL}
                    textColor={theme.colors.neonGreen}
                >
                    {passwordLength}
                </Text>
            </Flex>
            <CustomSlider 
                value={passwordLength}
                setValue={setPasswordLength}
                min={8}
                max={100}
            />
        </Flex>
    )
}
export default CharacterLength