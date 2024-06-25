import { useState } from "react"
import { AppTypography, Flex } from "../../styles/global"
import { TypographySize } from "../../styles/style.types"
import theme from "../../styles/theme"
import CustomSlider from "./UI/slider"

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
                <AppTypography>
                    Character Length
                </AppTypography>
                <AppTypography
                    size={TypographySize.HL}
                    textColor={theme.colors.neonGreen}
                >
                    {passwordLength}
                </AppTypography>
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