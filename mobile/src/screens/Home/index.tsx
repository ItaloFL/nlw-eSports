import React, { useEffect, useState } from 'react'
import { Image, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { useNavigation } from '@react-navigation/native'

import { styles } from './styles'

import LogoImg from '../../assets/logo-nlw-esports.png'
import { Header } from '../../components/Header'
import { GameCard, GameCardProps } from '../../components/GameCard'
import { Background } from '../../components/Background'

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([])

  const navigate = useNavigation()

  function navigateToGame({ id, title, bannerUrl }: GameCardProps) {
    navigate.navigate('game', { id, title, bannerUrl })
  }

  useEffect(() => {
    fetch('http://192.168.100.6:3333/games')
      .then(response => response.json())
      .then(data => setGames(data))
  }, [])

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={LogoImg} style={styles.logo} />

        <Header
          title="Encontre seu duo!"
          subtitle="Selecione o game que deseja jogar..."
        />

        <FlatList
          data={games}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <GameCard data={item} onPress={() => navigateToGame(item)} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Background>
  )
}
