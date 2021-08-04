import React, { useEffect, useState } from 'react'
import { Alert, Platform, Share } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { Fontisto } from '@expo/vector-icons'
import * as Linking from 'expo-linking'

import { Header } from '../../components/Header'
import { ListHeader } from '../../components/ListHeader'
import { Member } from '../../components/Member'
import { ListDivider } from '../../components/ListDivider'
import { ButtonIcon } from '../../components/ButtonIcon'

import { IAppointmentProps } from './../../components/Appointment/IAppointment'
import { MemberProps } from '../../components/Member/IMemberProps'
import { api } from '../../services/api'

import bannerImg from './../../assets/images/banner.png'
import { Background } from '../../components/Background'
import { Load } from '../../components/Load'
import { colors } from '../../assets/styles/global'
import { Container, ActionButton, ImageBackground, BannerContent, Title, Subtitle, MembersList,
  ButtonContainer
} from './style'

type GuildWidget = {
  id: string
  name: string
  instant_invite: string
  members: MemberProps[]
  presence_count: number
}

type RouteParams = {
  guildSelected: IAppointmentProps
}

export const AppointmentDetails = () => {
  const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget)
  const [loading, setLoading] = useState(true)
  const route = useRoute()
  const { guildSelected } = route.params as RouteParams


  useEffect(() => {
    const guildWidget = async () => {
      try {
        const { data } = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`)
        setWidget(data)
      } catch (error) {
        Alert.alert('Oooops', 'Verifique as configurações do servidor, Será que o Widget está habilitado')
      } finally {
        setLoading(false)
      }
    }
    guildWidget()
  }, [])

  const handleShareInvitation = () => {
    const message = Platform.OS === 'ios'
      ? `Junte-se a ${guildSelected.guild.name}`
      : widget.instant_invite

    Share.share({
      title: 'Compartilhar',
      message,
      url: widget.instant_invite
    })
  }

  return (
    <Background>
      <Container>
        <Header
          title="Detalhes"
          action={
            guildSelected.guild.owner &&
            <ActionButton
              onPress={ handleShareInvitation }
            >
              <Fontisto name="share" size={24} color={colors.primary}/>
            </ActionButton>
          }
        />

        <ImageBackground source={ bannerImg }>
          <BannerContent>
            <Title>{ guildSelected.guild.name }</Title>
            <Subtitle>{ guildSelected.description }</Subtitle>
          </BannerContent>
        </ImageBackground>


        {
          loading
           ? <Load />
           : <>
              <ListHeader
                title="Jogadores"
                subtitle={`Total ${widget.presence_count}`}
              />

              <MembersList
                data={ widget.members }
                keyExtractor={ (item: any) => String(item.id) }
                renderItem={({ item }: any) => {
                  return (
                    <Member data={ item }/>
                  )
                }}
                ItemSeparatorComponent={ () => <ListDivider isCentered/> }
              />
             </>
        }

        <ButtonContainer>
          <ButtonIcon
            title="Entrar na partida"
          />
        </ButtonContainer>

      </Container>
    </Background>
  )
}
