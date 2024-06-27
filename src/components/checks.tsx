'use client'

import Flex from "@/styles/components/flex"
import Text from "@/styles/components/text"
import { TypographyBold } from "@/styles/style.types"
import { useState } from "react"
import Checkbox from "./UI/checkbox/checkbox"

const Checks = () => {
    const [checkData, setCheckData] = useState([
        {
            title : 'Include Uppercase Letters',
            checked : false
        },
        {
            title : 'Include Lowercase Letters',
            checked : false
        },
        {
            title : 'Include Numbers',
            checked : false
        },
        {
            title : 'Include Symbols',
            checked : false
        },
    ])

    const handleChecked = (index : number) => {
        setCheckData(
            prev => prev.map((item, i) => 
                i === index 
                ? {...item, checked : !item.checked} 
                : item)
        )
    }

    return (
        <Flex
            direction="column"
            padding="0 0 0 5px"
            gap={14}
        >
            {
                checkData.map((item, index : number) => (
                    <div 
                        className='flex gap-[10px] items-center w-full cursor-pointer'
                        key={index}
                        onClick={()=>handleChecked(index)}
                    >
                        <Checkbox 
                            checked={item.checked}
                        />
                        <Text
                            bold={TypographyBold.md}
                        >
                            {item.title}
                        </Text>
                    </div>
                ))
            }
        </Flex>
    )
}
export default Checks