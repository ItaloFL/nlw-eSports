import React from 'react'
import { Image, View, FlatList } from 'react-native'

import { styles } from './styles'

import { GAMES } from '../../utils/games'

import LogoImg from '../../assets/logo-nlw-esports.png'
import { Header } from '../../components/Header'
import { GameCard } from '../../components/GameCard'

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={LogoImg} style={styles.logo} />

      <Header
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />

      <FlatList
        data={GAMES}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <GameCard data={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
      />
    </View>
  )
}
