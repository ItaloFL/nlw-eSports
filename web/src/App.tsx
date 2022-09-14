import './styles/main.css'

import logoSvg from './assets/Logo.svg'

import { MagnifyingGlassPlus } from 'phosphor-react'

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center m-20">
      <img src={logoSvg} alt="" />

      <h1 className="text-6xl text-white font-black my-20">
        Seu{' '}
        <span className="text-transparent bg-nlw-linear bg-clip-text">duo</span>{' '}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6">
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image 1.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-card-linear absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              Leage of Leagens
            </strong>
            <span className="text-zinc-300 text-sm block">4 anuncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image 2.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-card-linear absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Dota 2</strong>
            <span className="text-zinc-300 text-sm block">4 anuncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image 3.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-card-linear absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              Counter Strike
            </strong>
            <span className="text-zinc-300 text-sm block">4 anuncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image 5.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-card-linear absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Apex Legends</strong>
            <span className="text-zinc-300 text-sm block">4 anuncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image 6.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-card-linear absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Fortnite</strong>
            <span className="text-zinc-300 text-sm block">4 anuncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image 7.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-card-linear absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              World of Warcraft
            </strong>
            <span className="text-zinc-300 text-sm block">4 anuncios</span>
          </div>
        </a>
      </div>

      <div className="pt-1 bg-nlw-linear self-stretch rounded-lg mt-8 overflow-hidden">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-black block">
              Não encontrou seu duo?
            </strong>
            <span className="text-zinc-400 block">
              Publique um anúncio para encontrar novos players!
            </span>
          </div>

          <button className="px-4 py-3 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3">
            <MagnifyingGlassPlus size={24} />
            Publicar anuncio
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
