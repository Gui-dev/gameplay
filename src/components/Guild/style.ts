import styled from 'styled-components/native'

import { colors, fonts } from '../../assets/styles/global'

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0 24px;
`

export const Content = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const GuildInfo = styled.View`

`

export const Title = styled.Text`
  font-size: 18px;
  font-family: ${fonts.title700};
  color: ${colors.heading};
  margin-bottom: 4px;
`

export const GuildOwner = styled.Text`
  font-size: 13px;
  font-family: ${fonts.text400};
  color: ${colors.highlight};
  margin-bottom: 12px;
`

