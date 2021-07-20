import styled from 'styled-components/native'
import { colors, fonts } from '../../assets/styles/global'

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 27px;
  padding: 0 24px;
`

export const Title = styled.Text`
  font-size: 18px;
  font-family: ${fonts.title700};
  color: ${colors.heading};
`

export const Subtitle = styled.Text`
  font-size: 13px;
  font-family: ${fonts.text400};
  color: ${colors.highlight};
`
