import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Background } from '../../components/Background'
import { Entypo } from '@expo/vector-icons'

import { useRoute, useNavigation } from '@react-navigation/native'
import LogoSvg from '../../assets/logo-nlw-esports.png'

import { styles } from './styles'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { THEME } from '../../theme'
import { Header } from '../../components/Header'
import { DuoCard, DuoCardProps } from '../../components/DuoCard'
import { DuoMatch } from '../../components/DuoMatch'

interface RouteParams {
  id: string
  title: string
  bannerUrl: string
}

export function Game() {
  const [games, setGames] = useState<DuoCardProps[]>([])
  const [discordDuoSelected, setDiscordDuoSelected] = useState('')

  const navigation = useNavigation()
  const route = useRoute()
  const game = route.params as RouteParams

  function handleGoBack() {
    navigation.goBack()
  }

  async function getDiscordUser(adsId: string) {
    fetch(`http://192.168.100.6:3333/ads/${adsId}/discord`)
      .then(response => response.json())
      .then(data => setDiscordDuoSelected(data.discord))
  }

  useEffect(() => {
    fetch(`http://192.168.100.6:3333/games/${game.id}/ads`)
      .then(response => response.json())
      .then(data => setGames(data))
  }, [])

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
              onPress={handleGoBack}
            />
          </TouchableOpacity>

          <Image source={LogoSvg} />

          <View style={styles.right} />
        </View>

        <Image
          source={{ uri: game.bannerUrl }}
          style={styles.cover}
          resizeMode="cover"
        />

        <Header title={game.title} subtitle="Conecte-se e comece a jogar!" />

        <FlatList
          data={games}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <DuoCard data={item} onConnect={() => getDiscordUser(item.id)} />
          )}
          horizontal
          style={styles.containerList}
          contentContainerStyle={[
            games.length > 0 ? styles.contentList : styles.emptyListContent
          ]}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.emptyListText}>
              N??o h?? anuncios publicados nesse jogo
            </Text>
          )}
        />

        <DuoMatch
          visible={discordDuoSelected.length > 0}
          discord={discordDuoSelected}
          onClose={() => setDiscordDuoSelected('')}
        />
      </SafeAreaView>
    </Background>
  )
}
