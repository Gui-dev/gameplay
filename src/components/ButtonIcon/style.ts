import styled from 'styled-components/native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import { colors, fonts } from '../../assets/styles/global'

type ContainerProps = RectButtonProps

export const Container = styled(RectButton)<ContainerProps>`
  align-items: center;
  flex-direction: row;
  height: 56px;
  width: 100%;
  background-color: ${colors.primary};
  border-radius: 8px;
`

export const IconWrapper = styled.View`
  align-items: center;
  justify-content: center;
  height: 56px;
  width: 56px;
  border-right-width: 1px;
  border-right-color: ${colors.line};
`

export const Image = styled.Image`
  height: 18px;
  width: 24px;
`

export const ButtonText = styled.Text`
  flex: 1;
  font-size: 15px;
  font-family: ${fonts.text500};
  text-align: center;
  color: ${colors.heading};
`
