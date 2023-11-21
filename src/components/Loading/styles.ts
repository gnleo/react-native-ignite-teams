import styled from 'styled-components/native'
import { useTheme } from 'styled-components'

export const Container  = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${() => useTheme().COLORS.GRAY_600};
`

export const LoadingIndicator = styled.ActivityIndicator.attrs(() => ({
  color: useTheme().COLORS.GREEN_700
}))``