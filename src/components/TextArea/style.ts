import styled from 'styled-components/native'
import { colors, fonts } from '../../assets/styles/global'

export const Container = styled.TextInput`
  font-size: 13px;
  font-family: ${fonts.text400};
  color: ${colors.heading};
  margin-right: 4px;
  padding: 10px;
  height: 95px;
  width: 100%;
  background-color: ${colors.secondary40};
  border-radius: 8px;
`
