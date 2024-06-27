import { ReactNode } from "react"

const Container = ({
    className,
    children
} : {
    className? : string
    children? : ReactNode
}) => {
    return (
        <div className={`w-full p-[15px] h-fit bg-theme-darkGray ${className}`}>
            {children}
        </div>
    )
}
export default Container