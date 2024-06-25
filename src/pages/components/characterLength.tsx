import { AppTypography, Flex } from "../../styles/global"
import { Container } from "./container.style"

const CharacterLength = () => {
    return (
        <Container>
            <Flex
                direction="column"
            >
                <Flex
                    justify="space-between"
                >
                    <AppTypography>
                        Character Length
                    </AppTypography>
                    <AppTypography>
                        10
                    </AppTypography>
                </Flex>
            </Flex>
        </Container>
    )
}
export default CharacterLength