import styled from 'styled-components/native'
import { ModalProps } from 'react-native'

import { colors } from '../../assets/styles/global'

export const Container = styled.Modal<ModalProps>`

`

export const Overlay = styled.View`
  flex: 1;
  background-color: ${colors.overlay};
`
export const Content = styled.View`
  flex: 1;
  margin-top: 100px;
`
export const Bar = styled.View`
  align-self: center;
  height: 2px;
  width: 39px;
  margin-top: 13px;
  background-color: ${colors.secondary40};
  border-radius: 2px;
`
