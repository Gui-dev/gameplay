import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

import { colors, fonts } from '../../assets/styles/global'

export const Container = styled.ScrollView`
  flex: 1;
`

export const Label = styled.Text`
  font-size: 18px;
  font-family: ${fonts.title700};
  color: ${colors.heading};
  margin-top: 36px;
  margin-bottom: 18px;
  margin-left: 24px;
`

export const Form = styled.View`
  margin-top: 32px;
  padding: 0 24px;
`

export const ButtonSelect = styled(RectButton)`

`

export const Select = styled.View`
  flex-direction: row;
  align-items: center;
  height: 68px;
  width: 100%;
  padding-right: 25px;
  border-width: 1px;
  border-color: ${colors.secondary50};
  border-radius: 8px;
  overflow: hidden;
`

export const Image = styled.View`
  height: 68px;
  width: 64px;
  background-color: ${colors.secondary50};
  border-radius: 8px;
`

export const SelectBody = styled.View`
  flex: 1;
  align-items: center;
`

export const SelectLabel = styled.Text`
  font-size: 18px;
  font-family: ${fonts.title700};
  color: ${colors.heading};
`

export const Field = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
`

export const InputInfo = styled.View`

`

export const LabelGroup = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const InputLabel = styled.Text`
  font-size: 18px;
  font-family: ${fonts.title700};
  color: ${colors.heading};
  margin-bottom: 5px;
`

export const CharactersLimit = styled.Text`
  font-size: 13px;
  font-family: ${fonts.text400};
  color: ${colors.highlight};
  margin-bottom: 5px;
`

export const InputGroup = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Divider = styled.Text`
  font-size: 15px;
  font-family: ${fonts.text500};
  color: ${colors.highlight};
  margin-right: 4px;
`

export const ButtonContainer = styled.View`
  margin-top: 20px;
  margin-bottom: 56px;
`
