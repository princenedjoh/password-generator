'use client'

import { useState } from "react"
import Container from "./container"
import Flex from "@/styles/components/flex"
import { AnimatePresence, motion } from 'framer-motion';
import Text from "@/styles/components/text";
import { TypographySize } from "@/styles/style.types";
import { FaRegCopy } from 'react-icons/fa';
import theme from "@/styles/theme";


const PasswordComponent = () => {
    const [onMouseOver, setMouseOver] = useState(false)
    const [focus, setFocus] = useState(false)
    const [showCopied, setShowCopied] = useState(false)
    const [showConfetti, setShowConfetti] = useState(false)

    const handleCopied = () => {
        setShowCopied(true)
        setShowConfetti(true)
        setTimeout(() => {
            setShowCopied(false)
        }, 2000);
        setTimeout(() => {
            setShowConfetti(false)
        }, 200);
    }

    return (
        <Container
            className="relative overflow-hidden !w-full"
        >
            <Flex
                justify="space-between"
                align="center"
            >
                <input 
                    type="text"
                    placeholder="P4$5W0rD!"
                    className="outline-none bg-transparent flex flex-1 w-full text-theme-almostWhite"
                    onMouseOver={()=>setMouseOver(true)}
                    onMouseLeave={()=>setMouseOver(false)}
                    onFocus={()=>setFocus(true)}
                    onBlur={()=>setFocus(false)}
                />
                <Flex
                    align="center"
                    width='fit-content'
                >
                    {
                        <AnimatePresence>
                            <motion.div
                                animate={{
                                    opacity : showCopied ? 1 : 0,
                                    y : showCopied ? 0 : 5
                                }}
                            >
                                <Text
                                    size={TypographySize.body}
                                    className="duration-500"
                                >
                                    COPIED
                                </Text>
                            </motion.div>
                        </AnimatePresence>
                    }
                    <FaRegCopy
                        color={
                            focus || onMouseOver 
                                ? "white"
                                : theme.colors.neonGreen
                        }
                        onClick={handleCopied}
                        className="duration-200 cursor-pointer"
                    />
                </Flex>
            </Flex>
        </Container>
    )
}
export default PasswordComponent