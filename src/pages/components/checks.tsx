import { useState } from "react"
import { AppTypography, Flex } from "../../styles/global"
import { Checkbox } from "@mui/material"

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
            gap={18}
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
                        <AppTypography>
                            {item.title}
                        </AppTypography>
                    </Flex>
                ))
            }
        </Flex>
    )
}
export default Checks