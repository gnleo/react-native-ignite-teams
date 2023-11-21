import { ThemeProvider } from 'styled-components/native'
import {useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

// import { Groups } from '@screens/groups';
import theme from '@theme/index'

import { Loading } from '@components/Loading';
import { StatusBar } from 'react-native';
import { NewGroup } from '@screens/newGroup';

export default function App() {
  const [isLoadedFonts] = useFonts({Roboto_400Regular, Roboto_700Bold})
  
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      { isLoadedFonts ? <NewGroup/> : <Loading/> }
    </ThemeProvider>
  );
}