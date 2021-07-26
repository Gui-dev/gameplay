import React, { useState } from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { Header } from '../../components/Header'
import { CategorySelect } from '../../components/CategorySelect'
import { SmallInput } from '../../components/SmallInput'
import { GuildIcon } from '../../components/GuildIcon'
import { TextArea } from '../../components/TextArea'
import { Button } from '../../components/Button'
import { Guilds } from '../Guilds'
import { ModalView } from '../../components/ModalView'

import { GuildProps } from '../../components/Guild'

import { colors } from '../../assets/styles/global'
import { Background } from './../../components/Background'
import { Container, Label, Form, ButtonSelect, Select, Image, SelectBody, SelectLabel,
  Field, InputInfo, LabelGroup, InputLabel, CharactersLimit, InputGroup, Divider, ButtonContainer
} from './style'

export const AppointmentCreate = () => {
  const [category, setCategory] = useState('')
  const [openGuildModal, setOpenGuildModal] = useState(false)
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps)

  const handleOpenGuildModal = () => {
    setOpenGuildModal(true)
  }

  const handleCloseModal = () => {
    setOpenGuildModal(false)
  }

  const handleGuildSelected = (guild: GuildProps) => {
    setGuild(guild)
    setOpenGuildModal(false)
    console.log(guild)
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
            setCategory={ setCategory }
            hasCheckBox
          />

          <Form>
            <ButtonSelect onPress={ handleOpenGuildModal }>
              <Select>
                {
                  guild.icon
                    ? <GuildIcon />
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
                  <SmallInput maxLength={ 2 }/>
                  <Divider>/</Divider>
                  <SmallInput maxLength={ 2 }/>
                </InputGroup>
              </InputInfo>

              <InputInfo>
                <InputLabel>Hora e minuto</InputLabel>

                <InputGroup>
                  <SmallInput maxLength={ 2 }/>
                  <Divider>:</Divider>
                  <SmallInput maxLength={ 2 }/>
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
                />
              </InputGroup>
            </InputInfo>

            <ButtonContainer>
              <Button title="Agendar"/>
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
