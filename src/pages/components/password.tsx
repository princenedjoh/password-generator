import { useState } from "react";
import { AppTypography, Flex } from "../../styles/global"
import { TypographySize } from "../../styles/style.types";
import theme from "../../styles/theme";
import { Container } from "./container.style"
import { FaRegCopy } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion"
import ReactConfetti from "react-confetti";

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
            width="100%"
            className="relative overflow-hidden"
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
                                <AppTypography
                                    size={TypographySize.HM}
                                    className="duration-500"
                                >
                                    COPIED
                                </AppTypography>
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