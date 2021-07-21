import styled from 'styled-components/native'
import { colors, fonts } from '../../assets/styles/global'

type StatusProps = {
  status: boolean
}

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
`

export const Content = styled.View`

`

export const Title = styled.Text`
  font-size: 18px;
  font-family: ${fonts.title700};
  color: ${colors.heading};
`

export const Status = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 3px;
`

export const StatusBullet = styled.View<StatusProps>`
  height: 8px;
  width: 8px;
  margin-right: 10px;
  background-color: ${({ status }) => status ? colors.on : colors.primary };
  border-radius: 4px;
`

export const StatusText = styled.Text<StatusProps>`
  font-size: 13px;
  font-family: ${fonts.text400};
  color: ${colors.highlight};
`
