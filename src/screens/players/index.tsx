import { Header } from "@components/Header";
import { Container, Form, HeaderList, NumbersOfPlayers } from "./styles";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { Alert, FlatList, Keyboard } from "react-native";
import { useEffect, useState } from "react";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useRoute } from "@react-navigation/native";
import { PlayerStorageDTO } from "@storage/players/PlayerStorageDTO";
import { AppError } from "@utils/AppError";
import { playerAddOnGroup } from "@storage/players/addByGroup";
import { playerGetByGroupAndTeam } from "@storage/players/getByGroupAndTeam";
import { playerRemoveByGroup } from "@storage/players/removeByGroup";

type RouteParams = {
  group: string
}

export function Players(){

  // const [newPlayer, setNewPlayer] = useState<PlayerStorageDTO[]>([])
  const [nameNewPlayer, setNameNewPlayer] = useState('')
  const [team, setTeam] = useState("time a")
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([])

  const route = useRoute()
  const {group} = route.params as RouteParams

  async function handleAddPlayerOnGroup(){
    if(nameNewPlayer.trim().length === 0){
      return Alert.alert("Novo Jogador", "Informe nome do jogador.")
    }

    const newPlayer = { name: nameNewPlayer, team }

    try {
      await playerAddOnGroup(newPlayer, group)
      await fetchPlayersByTeam()
      Keyboard.dismiss()
      setNameNewPlayer('')
    } catch (error) {
      if(error instanceof AppError){
        Alert.alert('Novo Jogador', error.message)
      } else{
        Alert.alert('Novo Jogador', 'Não foi possível adicionar')
        console.log(error)
      }
    }
  }

  async function fetchPlayersByTeam(){
    try {
      const playersByTeam = await playerGetByGroupAndTeam(group, team)
      setPlayers(playersByTeam)
    } catch (error) {
      console.log(error)
      Alert.alert(group, `Não foi possível listar os jogadores do ${team}`)
    }
  }

  async function handleRemovePlayerOfGroup(playerName: string){
    try {
      await playerRemoveByGroup(playerName, group)
      fetchPlayersByTeam()
    } catch (error) {
      console.log(error)
      Alert.alert('Remover jogador', 'Não foi possível remover')
    }
  }

  useEffect(() => {
    fetchPlayersByTeam()
  }, [team])

  return (
    <Container>
      <Header showBackButton/>

      <Highlight
        title={group}
        subtitle="adicione a galera e separe os times"
      />

      <Form>
        <Input
          onChangeText={setNameNewPlayer}
          value={nameNewPlayer}
          placeholder="Nome da pessoa"
          autoCorrect={false}
          // onSubmitEditing={handleAddPlayerOnGroup}
          // returnKeyType="done"
        />

        <ButtonIcon 
          icon="add"
          onPress={handleAddPlayerOnGroup}
        />
      </Form>

      <HeaderList>
        <FlatList
          data={['time a', 'time b']}
          keyExtractor={(item, index) => `key${index}`}
          renderItem={({item})=> (
            <Filter 
              title={item} 
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />

        <NumbersOfPlayers>
          {players.length}
        </NumbersOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item, index) => `${item.name}${index}`}
        renderItem={({item}) => (
          <PlayerCard 
            name={item.name}
            onRemove={() => handleRemovePlayerOfGroup(item.name)}
          />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message='Não há pessoas neste time'/>)
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          {paddingBottom: 100},
          players.length === 0 && {flex: 1}
        ]}
      />

      <Button
        title="Remover Turma"
        type="SECONDARY"
      />
    </Container>
  )
}