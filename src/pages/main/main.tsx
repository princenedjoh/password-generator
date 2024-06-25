import { AppTypography } from "../../styles/global"
import { TypographySize } from "../../styles/style.types"
import theme from "../../styles/theme"
import CharacterLength from "../components/characterLength"
import Content from "../components/content"
import PasswordComponent from "../components/password"
import * as mainStyle from './main.style'

const Main = () => {
    return (
        <div className="flex justify-center items-center w-full h-[80vh] px-[20px] bg-theme-bg">
            <div className="w-full md:w-[300px] flex flex-col gap-3 items-center">
                <AppTypography
                    size={TypographySize.HM}
                    textColor={theme.colors.gray}
                >
                    Password Generator
                </AppTypography>
                <PasswordComponent />
                <Content />
            </div>
        </div>
    )
}
export default Main