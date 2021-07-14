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
  font-family: ${fonts.title700};
  text-align: center;
  line-height: 40px;
  color: ${colors.heading};
  margin-bottom: 10px;
`

export const Subtitle = styled.Text`
  font-size: 15px;
  font-family: ${fonts.title500};
  text-align: center;
  line-height: 25px;
  color: ${colors.heading};
  margin-bottom: 16px;
`
