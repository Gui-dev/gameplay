import React from 'react'
import { Fontisto } from '@expo/vector-icons'

import { Header } from '../../components/Header'
import { ListHeader } from '../../components/ListHeader'
import { Member } from '../../components/Member'
import { ListDivider } from '../../components/ListDivider'
import { ButtonIcon } from '../../components/ButtonIcon'

import { members } from '../../utils/members'

import bannerImg from './../../assets/images/banner.png'
import { Background } from '../../components/Background'
import { colors } from '../../assets/styles/global'
import { Container, ActionButton, ImageBackground, BannerContent, Title, Subtitle, MembersList,
  ButtonContainer
} from './style'

export const AppointmentDetails = () => {

  const handleShare = () => {
    console.log('Here')
  }

  return (
    <Background>
      <Container>
        <Header
          title="Detalhes"
          action={
            <ActionButton
              onPress={ handleShare }
            >
              <Fontisto name="share" size={24} color={colors.primary}/>
            </ActionButton>
          }
        />

        <ImageBackground source={ bannerImg }>
          <BannerContent>
            <Title>Lendários</Title>
            <Subtitle>É hoje que vamos chegar ao challenger sem perder uma partida da md10</Subtitle>
          </BannerContent>
        </ImageBackground>

        <ListHeader
          title="Jogadores"
          subtitle="Total 3"
        />

        <MembersList
          data={ members }
          keyExtractor={ (item: any) => String(item.id) }
          renderItem={({ item }: any) => {
            return (
              <Member data={ item }/>
            )
          }}
          ItemSeparatorComponent={ () => <ListDivider /> }
        />

        <ButtonContainer>
          <ButtonIcon
            title="Entrar na partida"
          />
        </ButtonContainer>

      </Container>
    </Background>
  )
}
