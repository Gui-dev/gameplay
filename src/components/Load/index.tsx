import React from 'react'
import LottieView from 'lottie-react-native'

import loadImg from './../../assets/images/lottie/load.json'
import { Container } from './style'

export const Load = () => {
  return (
    <Container>
      <LottieView
        source={ loadImg }
        autoPlay
        loop
        style={{
          height: 300,
          width: 300
        }}
      />
    </Container>
  )
}
