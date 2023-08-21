import { View } from "react-native";
import { Container, Title, Description } from "./styles";


export function Header() {
    return (
        <Container>
            <Title>Nome do Evento</Title>
            <Description>Segunda-feira, 21 de Agosto de 2023.</Description>
        </Container>
    )   
}