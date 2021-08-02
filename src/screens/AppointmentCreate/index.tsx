import React, { useState } from 'react'
import { Alert, KeyboardAvoidingView, Platform } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core'
import AsyncStorage from '@react-native-async-storage/async-storage'
import uuid from 'react-native-uuid'

import { Header } from '../../components/Header'
import { CategorySelect } from '../../components/CategorySelect'
import { SmallInput } from '../../components/SmallInput'
import { GuildIcon } from '../../components/GuildIcon'
import { TextArea } from '../../components/TextArea'
import { Button } from '../../components/Button'
import { Guilds } from '../Guilds'
import { ModalView } from '../../components/ModalView'

import { COLLECTION_APPOINTMENTS } from '../../config/storage'

import { GuildProps } from '../../components/Guild'

import { colors } from '../../assets/styles/global'
import { Background } from './../../components/Background'
import { Container, Label, Form, ButtonSelect, Select, Image, SelectBody, SelectLabel,
  Field, InputInfo, LabelGroup, InputLabel, CharactersLimit, InputGroup, Divider, ButtonContainer
} from './style'

export const AppointmentCreate = () => {
  const { navigate } = useNavigation()
  const [category, setCategory] = useState('')
  const [openGuildModal, setOpenGuildModal] = useState(false)
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps)

  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [hour, setHour] = useState('')
  const [minute, setMinute] = useState('')
  const [description, setDescription] = useState('')

  const handleOpenGuildModal = () => {
    setOpenGuildModal(true)
  }

  const handleCloseModal = () => {
    setOpenGuildModal(false)
  }

  const handleCategorySelect = (categoryId: string) => {
    setCategory(categoryId)
  }

  const handleGuildSelected = (guild: GuildProps) => {
    setGuild(guild)
    setOpenGuildModal(false)
  }

  const handleSubmit = async () => {
    try {
      const newAppointment = {
        id: uuid.v4(),
        guild,
        category,
        date: `${day}/${month} às ${hour}:${minute}`,
        description
      }

      const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS)
      const appointments = storage ? JSON.parse(storage) : []
      await AsyncStorage.setItem(
        COLLECTION_APPOINTMENTS,
        JSON.stringify([...appointments, newAppointment])
      )

      navigate('Home')
    } catch (error) {
      Alert.alert('Oooooops', 'Verifique se todos os campos estão preenchidos!')
    }
  }

  return (
    <Background>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={ Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <Container>
          <Header
            title="Agendar partida"
          />

          <Label>Categoria</Label>

          <CategorySelect
            categorySelected={ category }
            setCategory={ handleCategorySelect }
            hasCheckBox
          />

          <Form>
            <ButtonSelect onPress={ handleOpenGuildModal }>
              <Select>
                {
                  guild.icon
                    ? <GuildIcon
                        guildId={ guild.id }
                        iconId={ guild.icon }
                      />
                    : <Image />
                }


                <SelectBody>
                  <SelectLabel>
                    {
                      guild.name
                        ? guild.name
                        : 'Selecione o servidor'
                    }
                  </SelectLabel>
                </SelectBody>

                <Feather name="chevron-down" size={24} color={ colors.heading }/>
              </Select>
            </ButtonSelect>

            <Field>
              <InputInfo>
                <InputLabel>Dia e mês</InputLabel>

                <InputGroup>
                  <SmallInput
                    maxLength={ 2 }
                    value={ day }
                    onChangeText={ setDay }
                  />
                  <Divider>/</Divider>
                  <SmallInput
                    maxLength={ 2 }
                    value={ month }
                    onChangeText={ setMonth }
                  />
                </InputGroup>
              </InputInfo>

              <InputInfo>
                <InputLabel>Hora e minuto</InputLabel>

                <InputGroup>
                  <SmallInput
                    maxLength={ 2 }
                    value={ hour }
                    onChangeText={ setHour }
                  />
                  <Divider>:</Divider>
                  <SmallInput
                    maxLength={ 2 }
                    value={ minute }
                    onChangeText={ setMinute }
                  />
                </InputGroup>
              </InputInfo>

            </Field>


            <InputInfo>
              <LabelGroup>
                <InputLabel>Descrição</InputLabel>
                <CharactersLimit>No máximo 100 caracteres</CharactersLimit>
              </LabelGroup>

              <InputGroup>
                <TextArea
                  maxLength={ 100 }
                  numberOfLines={ 5 }
                  autoCorrect={ false }
                  multiline
                  value={ description }
                  onChangeText={ setDescription }
                />
              </InputGroup>
            </InputInfo>

            <ButtonContainer>
              <Button
                title="Agendar"
                onPress={ handleSubmit }
              />
            </ButtonContainer>

          </Form>
        </Container>

        <ModalView
          visible={ openGuildModal }
          closeModal={ handleCloseModal }
        >
          <Guilds handleGuildSelected={ handleGuildSelected }/>
        </ModalView>
      </KeyboardAvoidingView>
    </Background>
  )
}
