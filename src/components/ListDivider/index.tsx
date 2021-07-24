import React from 'react'

import { Container } from './style'

type ListDividerProps = {
  isCentered?: boolean
}

export const ListDivider = ({ isCentered = false}: ListDividerProps) => {
  return (
    <Container isCentered={ isCentered }/>
  )
}
