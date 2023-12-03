import { Header } from "@components/Header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { groupsCreate } from "@storage/groups/create";
import { AppError } from "@utils/AppError";
import { Alert } from "react-native";

export function NewGroup(){
  const navigation = useNavigation()

  const [group, setGroup] = useState('')

  async function handleNew(){
    try {
      if(group.trim().length === 0){
        return Alert.alert('Novo grupo', 'Informe o nome da turma.')
      }
      
      await groupsCreate(group)
      navigation.navigate('players', { group })
    } catch (error) {
      if(error instanceof AppError){
        Alert.alert('Novo Grupo', error.message)
      } else{
        Alert.alert('Novo Grupo', 'Não foi possível criar o novo grupo')
        console.log(error)
      }

    }
  }
  
  return (
    <Container>
      <Header showBackButton/>

      <Content>
        <Icon/>
        <Highlight
          title="Nova turma"
          subtitle="crie uma turma para adicionar pessoas"
        />

        <Input
          placeholder="Nome da turma"
          onChangeText={(text) => setGroup(text)}
          // onChangeText={setGroup}
        />

        <Button
          onPress={ handleNew }
          title="Criar"
          style={ { marginTop: 20 } }
        />

      </Content>

    </Container>
  )
}