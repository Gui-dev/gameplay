import React, { useState } from 'react'

import { Profile } from '../../components/Profile'
import { ButtonAdd } from '../../components/ButtonAdd'
import { CategorySelect } from '../../components/CategorySelect'
import { ListHeader } from '../../components/ListHeader'
import { appointments } from '../../utils/appointments'
import { Appointment } from '../../components/Appointment'
import { ListDivider } from '../../components/ListDivider'

import { Background } from './../../components/Background'
import { Container, Header, ListMatch } from './style'

export const Home = () => {
  const [category, setCategory] = useState('')

  const handleCategorySelect = (categoryId: string) => {
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }

  return (
    <Background>
      <Container>
        <Header>
          <Profile />
          <ButtonAdd />
        </Header>

        <CategorySelect
          categorySelected={ category }
          setCategory={ handleCategorySelect }
          hasCheckBox={ !!category }
        />

        <ListHeader
          title="Partidas agendadas"
          subtitle="Total 6"
        />

        <ListMatch
          data={ appointments }
          keyExtractor={ (item: any) => item.id }
          renderItem={ ({ item }: any) => {
            return (
              <Appointment
                data={ item }
              />
            )
          } }
          ItemSeparatorComponent={ () => <ListDivider /> }
        />
      </Container>
    </Background>
  )
}
