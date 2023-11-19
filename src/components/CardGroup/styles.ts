import { UsersThree } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import { useTheme } from "styled-components";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;

  background-color: ${()=> useTheme().COlORS.GRAY_500};
  border-radius: 6px;

  flex-direction: row;
  align-items: center;

  padding: 24px;
  margin-bottom: 12px;
`

export const Title = styled.Text`
  color: ${() => useTheme().COlORS.GRAY_200};
  font-size: ${() => useTheme().FONT_SIZE.MD}px;
  font-family: ${() => useTheme().FONT_FAMILY.REGULAR};
`

export const Icon = styled(UsersThree).attrs(() => ({
  size: 32,
  color: useTheme().COlORS.GREEN_700,
  weight: 'fill'
}))`
  margin-right: 20px;
`