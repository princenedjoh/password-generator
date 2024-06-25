import CharacterLength from "../components/characterLength"
import * as mainStyle from './main.style'

const Main = () => {
    return (
        <div className="flex justify-center items-center w-full h-screen bg-theme-bg">
            <div className="w-[300px] flex">
                <CharacterLength />
            </div>
        </div>
    )
}
export default Main