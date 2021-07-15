import React from 'react'

import { colors } from '../../assets/styles/global'
import { Container, Image } from './style'

type AvatarProps = {
  urlImage: string
}

export const Avatar = ({ urlImage }: AvatarProps) => {
  return (
    <Container
      colors={[colors.secondary50, colors.secondary70]}
    >
      <Image source={{ uri: urlImage}}/>
    </Container>
  )
}
