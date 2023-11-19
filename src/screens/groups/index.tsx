import { Header } from '@components/Header';
import { Container } from './styles';
import { Highlight } from '@components/Highlight';
import { CardGroup } from '@components/CardGroup';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { ListEmpty } from '@components/ListEmpty';
// import * as S from './styles';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])
  // const [groups, setGroups] = useState<string[]>(['Galera do fut', 'amigos'])

  return (

    <Container>
      <Header />
      
      <Highlight
        title='Turmas' 
        subtitle='jogue com a sua turma'
      />

      <FlatList
        data={groups}
        keyExtractor={ (item, index) => `key${index}`}
        renderItem={({item}) => (
          <CardGroup 
            title={item}
          />
        )}
        contentContainerStyle={groups.length === 0 && {flex: 1}}
        ListEmptyComponent={() => (
          <ListEmpty message='Que tal cadastrar a primeira turma?'/>)
        }
      />

      {/* <CardGroup title='Boleiros da Vigilância'/> */}
    </Container>

  );
}

