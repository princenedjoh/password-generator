
import Content from "@/components/content"
import PasswordComponent from "@/components/password"
import Text from "@/styles/components/text"
import { TypographySize } from "@/styles/style.types"
import theme from "@/styles/theme"


const Main = () => {
  return (
      <div className="Main flex justify-center items-center w-full h-[100vh] px-[20px] bg-theme-bg">
          <div className="w-full md:w-[350px] flex flex-col gap-3 items-center">
              <Text
                  size={TypographySize.HM}
                  textColor={theme.colors.gray}
              >
                  Password Generator
              </Text>
              <PasswordComponent />
              <Content />
          </div>
      </div>
  )
}
export default Main