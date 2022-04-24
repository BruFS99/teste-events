import api from 'api'

export interface IHero {
  id: number
  name: string
  thumbnail: {
    path: string
    extension: string
  }
  description: string
  isFavorite: boolean
  comics: {
    available: string
  }
  series: {
    available: string
  }
}

export interface IHeroResponse {
  data: {
    count: string
    limit: string
    offset: string
    results: IHero[]
  }
}

function getHeroes(params?: Object) {
  return api.get('/characters', { params })
}

function getHeroById(id: string) {
  return api.get(`/characters/${id}`)
}

function getHeroComics(id: string, params?: Object) {
  return api.get(`/characters/${id}/comics`, { params })
}

export default {
  getHeroes,
  getHeroById,
  getHeroComics,
}
