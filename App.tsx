import { ThemeProvider } from 'styled-components/native'
import {useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

import theme from '@theme/index'

import { Loading } from '@components/Loading';
import { StatusBar } from 'react-native';

import { Groups } from '@screens/groups';
import { NewGroup } from '@screens/newGroup';
import { Players } from '@screens/players'

export default function App() {
  const [isLoadedFonts] = useFonts({Roboto_400Regular, Roboto_700Bold})
  
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      { isLoadedFonts ? <Groups/> : <Loading/> }
    </ThemeProvider>
  );
}