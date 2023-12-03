import { Header } from "@components/Header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { groupsCreate } from "@storage/groups/create";

export function NewGroup(){
  const navigation = useNavigation()

  const [group, setGroup] = useState('')

  async function handleNew(){
    try {
      await groupsCreate(group)
      navigation.navigate('players', { group })
    } catch (error) {
      console.log(error)
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