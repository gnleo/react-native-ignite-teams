import {BackButton, BackIcon, Container, Logo} from './styles'

import imgLogo from '@assets/logo.png'

type Props = {
  showBackButton?: boolean
}

export function Header({showBackButton = false}: Props){
  return (
    <Container>

      {
        showBackButton && (
          <BackButton>
            <BackIcon />
          </BackButton>
        )
      }
      
      <Logo source={imgLogo}/>
    </Container>
  )
}