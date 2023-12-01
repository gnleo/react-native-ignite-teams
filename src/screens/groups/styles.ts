import {SafeAreaView} from 'react-native-safe-area-context'
import styled from "styled-components/native";
import {useTheme} from 'styled-components'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${ () => useTheme().COLORS.GRAY_600};
  padding: 24px;
`
