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

export const ButtonText = styled.Text`
  flex: 1;
  font-size: 15px;
  font-family: ${fonts.text500};
  text-align: center;
  color: ${colors.heading};
`
