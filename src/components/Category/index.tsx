import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'
import { SvgProps } from 'react-native-svg'

import { colors } from '../../assets/styles/global'

import { Container, Content, ViewContent, Check, Title } from './style'

type CategoryProps = RectButtonProps & {
  title: string
  icon: React.FC<SvgProps>
  hasCheckBox?: boolean
  checked?: boolean
}

export const Category = ({ title, icon: Icon, hasCheckBox = true, checked = false, ...rest }: CategoryProps) => {
  return (
    <Container {...rest}>
      <Content
        colors={[colors.secondary50, colors.secondary70]}
      >
        <ViewContent
          check={checked}
          colors={[checked ? colors.secondary85 : colors.secondary50, colors.secondary40]}
        >
          { hasCheckBox && (
            <Check check={checked} />
          ) }

          <Icon height={ 48 } width={ 48 }/>
          <Title>{ title }</Title>
        </ViewContent>
      </Content>
    </Container>
  )
}
