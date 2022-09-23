import react from 'react'
import './styles/main.css'

import { GameBanner } from './components/GameBanner'
import { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { CreateAdsBanner } from './components/CreateAdsBanner'
import { CreateAdModal } from './components/CraeteAdModal'
import axios from 'axios'
import logoSvg from './assets/Logo.svg'

interface Game {
  id: string
  title: string
  bannerUrl: string
  _count: {
    ads: number
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    axios('http://localhost:3333/games').then(response =>
      setGames(response.data)
    )
  }, [])

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center m-20">
      <img src={logoSvg} alt="" />

      <h1 className="text-6xl text-white font-black my-20">
        Seu{' '}
        <span className="text-transparent bg-nlw-linear bg-clip-text">duo</span>{' '}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6">
        {games.map(game => (
          <GameBanner
            key={game.id}
            title={game.title}
            bannerUrl={game.bannerUrl}
            adsCount={game._count.ads}
          />
        ))}
      </div>

      <Dialog.Root>
        <CreateAdsBanner />

        <CreateAdModal />
      </Dialog.Root>
    </div>
  )
}

export default App
