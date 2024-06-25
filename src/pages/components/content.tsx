import { Flex } from "../../styles/global"
import CharacterLength from "./characterLength"
import Checks from "./checks"
import { Container } from "./container.style"
import Strength from "./strength"
import Button from "./UI/button/button"

const Content = () => {
    return (
        <Container>
            <Flex
                direction="column"
            >
                <CharacterLength />
                <Flex
                    direction="column"
                    gap={12}
                >
                    <Checks />
                    <Strength />
                    <Button>
                        
                    </Button>
                </Flex>
            </Flex>
        </Container>
    )
}
export default Content