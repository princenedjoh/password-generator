'use client'

import Text from "@/styles/components/text"
import theme from "@/styles/theme"
import { ReactNode, useState } from "react"

const Button = ({
    children
} : {
    children? : ReactNode
}) => {
    const [mouseOver, setMouseOver] = useState(false)
    return (
        <div 
            className={`w-full p-[10px] h-[50px] border-[1px] border-solid duration-200 border-theme-neonGreen flex justify-center items-center cursor-pointer ${mouseOver ? 'bg-theme-darkGray' : 'bg-theme-neonGreen'}`}
            onMouseOver={()=>setMouseOver(true)}
            onMouseLeave={()=>setMouseOver(false)}
        >
            <Text
                textColor={mouseOver ? theme.colors.neonGreen : theme.colors.veryDarkGray}
            >
                GENERATE ➜
            </Text>
        </div>
    )
}

export default Button