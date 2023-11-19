import styled from "styled-components/native";
import {CaretLeft} from 'phosphor-react-native'
import { useTheme } from "styled-components";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const Logo = styled.Image`
  width: 46px;
  height: 55px;
`
export const BackButton = styled.TouchableOpacity`
  flex: 1;
`

export const BackIcon = styled(CaretLeft).attrs(() => ({
  color: useTheme().COlORS.WHITE,
  size: 32
}))``