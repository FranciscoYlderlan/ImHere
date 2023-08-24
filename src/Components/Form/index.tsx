import { Container, Input, Button, Simbol } from "./styles";
import { useState } from "react";
interface FormProps {
    addParticipant: () => void,
    //participants: Array<string> //ou string[];
}


export function Form({ addParticipant, participants } : FormProps) {
    const [name, setName] = useState()
    
    return (
        <Container>
            <Input 
                placeholder="Nome do participante" 
                placeholderTextColor='#6B6B6B'
                value={name}
                onChangeText={text => setName(text)}
            />
            <Button onPress={() => addParticipant(name)}><Simbol>&#10010;</Simbol></Button>
        </Container>
    )   
}