import styled from 'styled-components/native'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import { BorderlessButton } from 'react-native-gesture-handler'

import { colors, fonts } from '../../assets/styles/global'

export const Container = styled.SafeAreaView`
  flex: 1;
`

export const ActionButton = styled(BorderlessButton)`

`

export const ImageBackground = styled.ImageBackground`
  height: 234px;
  width: 100%;
  margin-bottom: 10px;
`

export const BannerContent = styled.View`
  flex: 1;
  justify-content: flex-end;
  margin-bottom: 30px;
  padding: 0 24px;
`

export const Title = styled.Text`
  font-size: 28px;
  font-family: ${fonts.title700};
  color: ${colors.heading};
`

export const Subtitle = styled.Text`
  font-size: 13px;
  font-family: ${fonts.text400};
  color: ${colors.heading};
`

export const MembersList = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingBottom: 30,
    paddingHorizontal: 24
  }
})`
  margin-top: 27px;
`

export const ButtonContainer = styled.View`
  padding: 0 24px;
  margin-bottom: ${getBottomSpace() + 20}px;
`
