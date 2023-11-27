import styled from "styled-components/native";
import {MaterialIcons} from "@expo/vector-icons"
import { useTheme } from "styled-components/native";


export const Container = styled.View`
  width: 100%;
  height: 56px;

  background-color: ${() => useTheme().COLORS.GRAY_500};

  flex-direction: row;
  align-items: center;

  margin-bottom: 16px;
  border-radius: 6px;
`
export const Name = styled.Text`
  flex: 1;

  font-size: ${() => useTheme().FONT_SIZE.MD}px;
  color: ${() => useTheme().COLORS.GRAY_200};
  font-family: ${() => useTheme().FONT_FAMILY.REGULAR};
  `

export const Icon = styled(MaterialIcons)`
  color: ${() => useTheme().COLORS.GRAY_200};
  margin-right: 16px;
  margin-left: 4px;
`
