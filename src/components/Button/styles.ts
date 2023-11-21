import { useTheme } from "styled-components";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
  type: ButtonStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  background-color: ${({type}) => { return type === 'PRIMARY' ?  useTheme().COLORS.GREEN_700 : useTheme().COLORS.RED_DARK}};

  border-radius: 6px;

  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  color: ${() => useTheme().COLORS.WHITE};
  font-size: ${() => useTheme().FONT_SIZE.MD}px;
  font-family: ${() => useTheme().FONT_FAMILY.BOLD};
`

