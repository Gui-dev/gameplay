import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'

import { colors, fonts } from '../../assets/styles/global'

type CheckedProps = {
  check: boolean
}

export const Container = styled(RectButton)`
  align-items: center;
  justify-content: center;
  height: 120px;
  width: 104px;
  margin-right: 8px;
  margin-left: 8px;
  border-radius: 8px;
`

export const Content = styled(LinearGradient)`
  align-items: center;
  justify-content: center;
  height: 120px;
  width: 104px;
  border-radius: 8px;
`

export const ViewContent = styled(LinearGradient)<CheckedProps>`
  align-items: center;
  justify-content: space-between;
  height: 116px;
  width: 100px;
  padding: 20px 0;
  border-radius: 8px;
  opacity: ${({ check }) => check ? '1' : '0.5'};
`

export const Check = styled.View<CheckedProps>`
  position: absolute;
  top: 7px;
  right: 7px;
  height: ${({ check }) => check ? '10px' : '12px'};
  width: ${({ check }) => check ? '10px' : '12px'};
  background-color: ${({ check }) => check ? colors.primary : colors.secondary100};
  border-width: ${({ check }) => check ? '0' : '2px'};
  border-color: ${colors.secondary50};
  border-radius: 3px;
`

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${fonts.title700};
  color: ${colors.heading};
  margin-top: 15px;
`
