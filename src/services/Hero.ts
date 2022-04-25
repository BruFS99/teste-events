import api from 'api'

interface IThumbnail {
  path: string
  extension: string
}
export interface IHero {
  id: number
  name: string
  thumbnail: IThumbnail
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
    total: number
  }
}

export interface IComicDate {
  type: 'onsaleDate' | 'focDate'
  date: string
}
export interface IComic {
  id: string
  title: string
  variantDescription: string
  thumbnail: IThumbnail
  dates: IComicDate[]
  modified: string
}

export interface IComicsResponse {
  data: {
    offset: string
    limit: string
    total: string
    count: string
    results: IComic[]
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
