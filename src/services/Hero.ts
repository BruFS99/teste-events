import api from 'api'

export interface IHero {
  id: number
  name: string
  thumbnail: {
    path: string
    extension: string
  }
}

export interface IListHeroResponse {
  data: {
    count: string
    limit: string
    offset: string
    results: IHero[]
  }
}

function getHeroes() {
  return api.get('/characters')
}

export default {
  getHeroes,
}
