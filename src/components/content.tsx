import Flex from "@/styles/components/flex"
import CharacterLength from "./characterLength"
import Checks from "./checks"
import Container from "./container"
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