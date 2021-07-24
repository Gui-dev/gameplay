import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 24px;
`

export const GuildList = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingTop: 103,
    paddingBottom: 60
  }
})`
  width: 100%;
`
