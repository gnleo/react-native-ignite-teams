import {SafeAreaView} from 'react-native-safe-area-context'
import { UsersThree } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${() => useTheme().COLORS.GRAY_600};
  padding: 24px;
`

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`

export const Icon = styled(UsersThree).attrs(() => ({
  size: 56,
  color: useTheme().COLORS.GREEN_700
}))`
  align-self: center;
`