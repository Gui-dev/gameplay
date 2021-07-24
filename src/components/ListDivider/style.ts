import styled from 'styled-components/native'

import { colors } from '../../assets/styles/global'

type ContainerProps = {
  isCentered: boolean
}

export const Container = styled.View<ContainerProps>`
  align-self: flex-end;
  height: 1px;
  width: 78%;
  background-color: ${colors.secondary40};
  margin-top: ${({ isCentered }) => isCentered ? '12px' : '2px'};
  margin-bottom: ${({ isCentered }) => isCentered ? '12px' : '31px'};
`
