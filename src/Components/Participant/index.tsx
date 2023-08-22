import { Container, Button, Simbol, Name } from "./styles";

import { Entypo } from '@expo/vector-icons'; 

interface ParticipantProps {
    name: string,
} 

export function Participant({name}: ParticipantProps) {
    return (
        <Container>
            <Name>{name}</Name>

            <Button><Entypo name="minus" size={24} color="white" /></Button>
        </Container>
    )
}