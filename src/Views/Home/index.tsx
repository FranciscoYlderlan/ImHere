import { Container, Title } from "./styles";

import { Header } from '../../Components/Header'
import { Form } from '../../Components/Form'
import { Participant } from "../../Components/Participant";

export function Home() {
    
    return (
        <Container>
            <Header/>
            <Form/>
            <Title>Participantes</Title>
            <Participant/>
        </Container>
    )   
}