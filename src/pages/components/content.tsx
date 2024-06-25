import { Flex } from "../../styles/global"
import CharacterLength from "./characterLength"
import Checks from "./checks"
import { Container } from "./container.style"

const Content = () => {
    return (
        <Container>
            <Flex
                direction="column"
            >
                <CharacterLength />
                <Checks />
            </Flex>
        </Container>
    )
}
export default Content