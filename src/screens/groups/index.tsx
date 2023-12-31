import { Header } from '@components/Header';
import { Container } from './styles';
import { Highlight } from '@components/Highlight';
import { CardGroup } from '@components/CardGroup';
import { useCallback, useState } from 'react';
import { FlatList } from 'react-native';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { groupsGetAll } from '@storage/groups/getAll';
import { Loading } from '@components/Loading';
// import * as S from './styles';

export function Groups() {
  const navigation = useNavigation()

  const [isLoading, setIsLoading] = useState(true)
  const [groups, setGroups] = useState<string[]>([])

  function handleNewGroup(){
    navigation.navigate('new')
  }

  async function fetchGroups() {
    try {
      setIsLoading(true)
      const data = await groupsGetAll()
      setGroups(data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  function handleOpenGroup(group: string){
    navigation.navigate('players', {group})
  }

  useFocusEffect(useCallback(() => {
    fetchGroups()
  }, []))

  return (

    <Container>
      <Header />
      
      <Highlight
        title='Turmas' 
        subtitle='jogue com a sua turma'
      />

      { isLoading ? <Loading/> :
        <FlatList
          data={groups}
          keyExtractor={ (item, index) => `key${index}`}
          renderItem={({item}) => (
            <CardGroup 
              title={item}
              onPress={() => handleOpenGroup(item)}
            />
          )}
          contentContainerStyle={groups.length === 0 && {flex: 1}}
          ListEmptyComponent={() => (
            <ListEmpty message='Que tal cadastrar a primeira turma?'/>)
          }
        />
      }
      <Button 
        title='Criar nova turma'
        onPress={handleNewGroup}
        // type='SECONDARY'
      />

      {/* <CardGroup title='Boleiros da Vigilância'/> */}
    </Container>

  );
}

