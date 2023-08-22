import { Container, Title, Message } from "./styles";

import { Text, FlatList } from "react-native";
import { Header } from '../../Components/Header'
import { Form } from '../../Components/Form'
import { Participant } from "../../Components/Participant";
import { useState } from "react";


export function Home() {
    const [participants, setParticipants] = useState<string[]>([])
    return (
        <Container>
            <Header/>
            <Form addParticipant={setParticipants}/>
            <Title>Participantes</Title>
            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({item}) => (<Participant name={item}/>)}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={<Message>Ninguém chegou no evento ainda? 
                    Adicione participantes a sua lista de presença.</Message>}
            />

        </Container>
    )   
}