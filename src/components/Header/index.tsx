import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

import { colors } from '../../assets/styles/global'
import { Container, BackButton, Title, Action } from './style'

type HeaderProps =  {
  title: string
  action?: React.ReactNode
}

export const Header = ({ title, action }: HeaderProps) => {
  const { goBack } = useNavigation()

  const handleGoBack = () => {
    goBack()
  }

  return (
    <Container
      colors={[colors.secondary100, colors.secondary40]}
    >
      <BackButton
        onPress={ handleGoBack }
      >
        <Feather name="arrow-left" size={24} color={colors.heading}/>
      </BackButton>

      <Title>{title}</Title>

      { action && (
        <Action>
          { action }
        </Action>
      ) }
    </Container>
  )
}
