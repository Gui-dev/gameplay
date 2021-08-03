import React, { useCallback, useEffect, useState } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { Profile } from '../../components/Profile'
import { ButtonAdd } from '../../components/ButtonAdd'
import { CategorySelect } from '../../components/CategorySelect'
import { ListHeader } from '../../components/ListHeader'
import { appointments } from '../../utils/appointments'
import { Appointment } from '../../components/Appointment'
import { ListDivider } from '../../components/ListDivider'

import { COLLECTION_APPOINTMENTS } from '../../config/storage'
import { IAppointmentProps } from './../../components/Appointment/IAppointment'

import { Background } from './../../components/Background'
import { Container, Header, ListMatch } from './style'
import { Load } from '../../components/Load'

export const Home = () => {
  const { navigate } = useNavigation()
  const [category, setCategory] = useState('')
  const [appointments, setAppointments] = useState<IAppointmentProps[]>([])
  const [loading, setLoading] = useState(false)

  const handleCategorySelect = (categoryId: string) => {
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }

  const handleNavigationToAppointmentCreate = () => {
    navigate('AppointmentCreate')
  }

  const handleNavigationAppointmentDetails = () => {
    navigate('AppointmentDetails')
  }

  useFocusEffect(useCallback(() => {
    const loadAppointments = async () => {
      setLoading(true)
      const storageResponse = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS)
      const storage: IAppointmentProps[] = storageResponse ? JSON.parse(storageResponse) : []
      if (category) {
        setAppointments(storage.filter(appointment => appointment.category === category))
      } else {
        setAppointments(storage)
      }
      setLoading(false)
    }

    loadAppointments()
  }, [category])
  )

  return (
    <Background>
      <Container>
        <Header>
          <Profile />
          <ButtonAdd onPress={ handleNavigationToAppointmentCreate }/>
        </Header>

        <CategorySelect
          categorySelected={ category }
          setCategory={ handleCategorySelect }
          hasCheckBox={ !!category }
        />

          {
            loading
              ? <Load />
              :
                <>
                  <ListHeader
                    title="Partidas agendadas"
                    subtitle={`Total ${appointments.length}`}
                  />
                  <ListMatch
                    data={ appointments }
                    keyExtractor={ (item: any) => item.id }
                    renderItem={ ({ item }: any) => {
                      return (
                        <Appointment
                          data={ item }
                          onPress={ handleNavigationAppointmentDetails }
                        />
                      )
                    } }
                    ItemSeparatorComponent={ () => <ListDivider /> }
                  />
                </>
          }
      </Container>
    </Background>
  )
}
