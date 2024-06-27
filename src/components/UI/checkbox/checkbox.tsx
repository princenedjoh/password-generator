import theme from "@/styles/theme"
import { AnimatePresence, motion } from 'framer-motion';
import { FaCheck } from "react-icons/fa"

const Checkbox = ({
    checked,
    onClick
} : {
    checked : boolean
    onClick? : ()=>void
}) => {
    return (
        <div 
            className={`w-[15px] h-[15px] flex justify-center items-center border-[1px] border-solid duration-500 ${checked ? 'border-theme-neonGreen bg-theme-neonGreen' : 'border-theme-almostWhite'}`}
            onClick={onClick}
        >
            {
                checked &&
                <AnimatePresence>
                    <motion.div
                        initial={{
                            opacity : 0
                        }}
                        animate={{
                            opacity : 1
                        }}
                    >
                        <FaCheck 
                            size={9}
                            color={theme.colors.veryDarkGray}
                        />
                    </motion.div>
                </AnimatePresence>
            }
        </div>
    )
}

export default Checkbox