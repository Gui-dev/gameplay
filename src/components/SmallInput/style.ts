import styled from 'styled-components/native'
import { colors, fonts } from '../../assets/styles/global'

export const Container = styled.TextInput`
  font-size: 13px;
  font-family: ${fonts.text400};
  text-align: center;
  color: ${colors.heading};
  margin-right: 4px;
  height: 48px;
  width: 48px;
  background-color: ${colors.secondary40};
  border-width: 1px;
  border-color: ${colors.secondary50};
  border-radius: 8px;
`
