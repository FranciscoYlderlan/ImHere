import { Container, Button, Simbol, Name } from "./styles";

import { Entypo } from '@expo/vector-icons'; 

interface ParticipantProps {
    name: string,
    handleRemove: () => void,
} 

export function Participant({name, handleRemove}: ParticipantProps) {
    return (
        <Container>
            <Name>{name}</Name>

            <Button onPress={handleRemove}><Entypo name="minus" size={24} color="white" /></Button>
        </Container>
    )
}