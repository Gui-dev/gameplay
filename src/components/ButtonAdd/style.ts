import styled from 'styled-components/native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import { colors } from '../../assets/styles/global'

export const Container = styled(RectButton)<RectButtonProps>`
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 48px;
  background-color: ${colors.primary};
  border-radius: 8px;
`
