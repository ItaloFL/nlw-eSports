import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'
import { convertHourToMinutes } from './utils/convertHourToMinutes'
import { convertMinutesToHour } from './utils/convertMinutesToHour'

const app = express()
app.use(express.json())
app.use(cors())

const prisma = new PrismaClient()

app.get('/games', async (request, response) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true
        }
      }
    }
  })

  return response.json(games)
})

app.post('/games/:id/ads', async (request, response) => {
  const gameId = request.params.id
  const body: any = request.body

  const ad = await prisma.ad.create({
    data: {
      id: body.id,
      gameId,
      name: body.name,
      weekDays: body.weekDays.join(','),
      useVoiceChannel: body.useVoiceChannel,
      yearsPlaying: body.yearsPlaying,
      hourStart: convertHourToMinutes(body.hourStart),
      hourEnd: convertHourToMinutes(body.hourEnd),
      discord: body.discord
    }
  })

  return response.json(ad)
})

app.get('/games/:id/ads', async (request, response) => {
  const gameId = request.params.id

  const ads = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      weekDays: true,
      useVoiceChannel: true,
      yearsPlaying: true,
      hourStart: true,
      hourEnd: true
    },
    where: {
      gameId
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  return response.json(
    ads.map(ad => {
      return {
        ...ad,
        weekDays: ad.weekDays.split(','),
        hourStart: convertMinutesToHour(ad.hourStart),
        hourEnd: convertMinutesToHour(ad.hourEnd)
      }
    })
  )
})

app.get('/ads/:id/discord', async (request, response) => {
  const adId = request.params.id

  const ad = await prisma.ad.findFirstOrThrow({
    select: {
      discord: true
    },
    where: {
      id: adId
    }
  })

  return response.json({
    discord: ad.discord
  })
})

app.listen(3333, () => {
  console.log('Servidor rodando na porta 3333 💻')
})
