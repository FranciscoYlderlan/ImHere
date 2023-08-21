import { Container, Button, Simbol, Name } from "./styles";

interface ParticipantProps {
    description: string,
} 

export function Participant({description}: ParticipantProps) {
    return (
        <Container>
            <Name>Eduardo Gomes</Name>
            <Button><Simbol>&#9866;</Simbol></Button>
        </Container>
    )
}