import { Container, Title, Message } from "./styles";

import { Text, FlatList, Alert } from "react-native";
import { Header } from '../../Components/Header'
import { Form } from '../../Components/Form'
import { Participant } from "../../Components/Participant";
import { useState } from "react";


export function Home() {
    const [participants, setParticipants] = useState<string[]>([])
    
    function handleAddParticipant(name: string) {
        if(participants.includes(name)){
            return Alert.alert('Participante já cadastrado.', 'Já existe um participante na lista com esse nome.')
        }
        setParticipants(prevState => [name,...prevState])
    }

    function handleRemoveParticipant(name: string) {
        Alert.alert('Remover', 'Deseja remover este participante?',[
            {
                text: 'Sim',
                onPress: () => setParticipants(prevState => 
                    prevState.filter(participant => participant !== name)
                )
            },{
                text: "Não",
                style:"cancel"
            }
        ])
    }



    return (
        <Container>
            <Header/>
            <Form addParticipant={handleAddParticipant} />
            <Title>Participantes</Title>
            <FlatList
                data={participants}
                keyExtractor={name => name}
                renderItem={({item}) => (
                    <Participant 
                        name={item} 
                        handleRemove={() => handleRemoveParticipant(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={
                    <Message>
                        Ninguém chegou no evento ainda? 
                        Adicione participantes a sua lista de presença.
                    </Message>
                }
            />

        </Container>
    )   
}