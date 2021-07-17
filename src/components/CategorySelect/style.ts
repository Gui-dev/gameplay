import styled from 'styled-components/native'

export const Container = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingRight: 16,
    paddingLeft: 16
  }
})`
  max-height: 120px;
  min-height: 120px;
`
