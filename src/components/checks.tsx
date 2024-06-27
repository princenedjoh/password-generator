'use client'

import Flex from "@/styles/components/flex"
import Text from "@/styles/components/text"
import { TypographyBold } from "@/styles/style.types"
import { useState } from "react"

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
    return (
        <Flex
            direction="column"
            padding="0 0 0 5px"
            gap={14}
        >
            {
                checkData.map((item, index : number) => (
                    <Flex
                        key={index}
                        align='center'
                        gap={10}
                    >
                        <input 
                            type="checkbox" 
                            checked={item.checked}
                            className="bg-transparent rounded-full"
                        />
                        <Text
                            bold={TypographyBold.md}
                        >
                            {item.title}
                        </Text>
                    </Flex>
                ))
            }
        </Flex>
    )
}
export default Checks