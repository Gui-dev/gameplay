import styled from 'styled-components/native'
import { colors, fonts } from '../../assets/styles/global'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${colors.secondary90};
`

export const Image = styled.Image`
  height: 360px;
  width: 100%;
`

export const Content = styled.View`
  width: 100%;
  margin-top: -60px;
  padding: 0 50px;
`

export const Title = styled.Text`
  font-size: 35px;
  text-align: center;
  color: ${colors.heading};
  margin-bottom: 16px;
`

export const Subtitle = styled.Text`
  font-size: 15px;
  text-align: center;
  color: ${colors.heading};
  margin-bottom: 16px;
`
