import { Container, Button, Simbol, Name } from "./styles";

interface ParticipantProps {
    description: string,
} 

export function Participant({description}: ParticipantProps) {
    return (
        <Container>
            <Name>Eduardo Gomes</Name>
            <Button><Simbol>&#x268A;</Simbol></Button>
        </Container>
    )
}