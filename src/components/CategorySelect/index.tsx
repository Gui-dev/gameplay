import React from 'react'

import { Category } from '../Category'
import { categories } from './../../utils/categories'

import { Container } from './style'

type CategorySelect = {
  categorySelected: string
  hasCheckBox?: boolean
  setCategory: (categoryId: string) => void
}

export const CategorySelect = ({ categorySelected, hasCheckBox = false, setCategory }: CategorySelect) => {
  return (
    <Container>
      { categories.map(category => {
        return (
          <Category
            key={ String(category.id) }
            title={ category.title }
            icon={ category.icon }
            checked={ category.id === categorySelected }
            hasCheckBox={ hasCheckBox }
            onPress={ () => setCategory(category.id) }
          />
        )
      }) }
    </Container>
  )
}
