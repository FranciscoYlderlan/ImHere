import styled from 'styled-components/native'

export const Container = styled.View`
   margin: 32px 24px;
   flex-direction: row;
   gap: 8;
`

export const Input = styled.TextInput`
   flex: 1; 
   background-color: #1F1E25;
   border-radius: 4px ;
   padding: 16px 16px;

`

export const Button = styled.TouchableOpacity`
    background-color: #31CF67;
    color: white;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    padding: 16px 20px;
`

export const Simbol = styled.Text`
    color: #FFF;
    text-align: center;
`