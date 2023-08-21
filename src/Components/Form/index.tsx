import { Container, Input, Button, Simbol } from "./styles";

export function Form() {
    return (
        <Container>
            <Input placeholder="Nome do participante" placeholderTextColor='#6B6B6B'/>
            <Button><Simbol>&#10010;</Simbol></Button>
        </Container>
    )   
}