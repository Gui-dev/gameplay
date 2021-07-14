import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import discordImg from './../../assets/images/discord.png'
import { Container, IconWrapper, Image, ButtonText } from './style'

type ButtonIconProps = TouchableOpacityProps & {
  title: string
}

export const ButtonIcon = ({ title, ...rest }: ButtonIconProps) => {
  return (
    // @ts-ignore
    <Container {...rest}>
      <IconWrapper>
        <Image source={discordImg}/>
      </IconWrapper>
      <ButtonText>{ title }</ButtonText>
    </Container>
  )
}
