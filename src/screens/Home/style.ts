import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const Container = styled.View`
  flex: 1;
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: ${getStatusBarHeight() + 26}px;
  margin-bottom: 42px;
  padding: 0 24px;
`

export const Content = styled.View`

`
