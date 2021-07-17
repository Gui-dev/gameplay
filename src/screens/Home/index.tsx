import React, { useState } from 'react'

import { Profile } from '../../components/Profile'
import { ButtonAdd } from '../../components/ButtonAdd'
import { CategorySelect } from '../../components/CategorySelect'

import { Container, Header, Content } from './style'

export const Home = () => {
  const [category, setCategory] = useState('')

  const handleCategorySelect = (categoryId: string) => {
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }

  return (
    <Container>
      <Header>
        <Profile />
        <ButtonAdd />
      </Header>

      <Content>
        <CategorySelect
          categorySelected={ category }
          setCategory={ handleCategorySelect }
        />
      </Content>
    </Container>
  )
}
