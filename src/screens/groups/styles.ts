import styled from "styled-components/native";
import {useTheme} from 'styled-components'

export const Container = styled.View`
  flex: 1;
  background-color: ${ () => useTheme().COlORS.GRAY_600};
  padding: 24px;
`
