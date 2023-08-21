import { View } from "react-native";
import { Header } from '../../Components/Header'
import { Form } from '../../Components/Form'
import { Container } from "./styles";
export function Home() {
    
    return (
        <Container>
            <Header/>
            <Form/>
        </Container>
    )   
}