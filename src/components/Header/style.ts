import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'
import { BorderlessButton } from 'react-native-gesture-handler'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { colors, fonts } from '../../assets/styles/global'

export const Container = styled(LinearGradient)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 104px;
  width: 100%;
  padding: 0 24px;
  padding-top: ${getStatusBarHeight()}px;
`

export const BackButton = styled(BorderlessButton)`

`

export const Title = styled.Text`
  flex: 1;
  font-size: 20px;
  font-family: ${fonts.title700};
  text-align: center;
  color: ${colors.heading};
`

export const Action = styled.View`

`
