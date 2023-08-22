import { Container, Input, Button, Simbol } from "./styles";
import { useState } from "react";
interface FormProps {
    addParticipant: () => void;
}


export function Form({ addParticipant } : FormProps) {
    const [name, setName] = useState()
    
    function handleAddParticipant() {
        addParticipant(prevState => [name,...prevState])
    }
    return (
        <Container>
            <Input 
                placeholder="Nome do participante" 
                placeholderTextColor='#6B6B6B'
                value={name}
                onChangeText={text => setName(text)}
            />
            <Button onPress={handleAddParticipant}><Simbol>&#10010;</Simbol></Button>
        </Container>
    )   
}