import { ReactNode, useState } from "react"
import { AppTypography } from "../../../../styles/global"
import theme from "../../../../styles/theme"

const Button = ({
    children
} : {
    children? : ReactNode
}) => {
    const [mouseOver, setMouseOver] = useState(false)
    return (
        <div 
            className={`w-full p-[10px] h-[50px] border-[1px] border-solid border-theme-neonGreen flex justify-center items-center cursor-pointer ${mouseOver ? 'bg-theme-darkGray' : 'bg-theme-neonGreen'}`}
            onMouseOver={()=>setMouseOver(true)}
            onMouseLeave={()=>setMouseOver(false)}
        >
            <AppTypography
                textColor={mouseOver ? theme.colors.neonGreen : theme.colors.veryDarkGray}
            >
                Generate ➜
            </AppTypography>
        </div>
    )
}

export default Button