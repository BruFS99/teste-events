import { useDispatch } from 'react-redux'
import { IHero } from 'services/Hero'

import { addFavoriteHero, removeFavoriteHero } from './actions'

function useFavoriteHeroes() {
  const dispatch = useDispatch()

  const handleAddFavoriteHero = (hero: IHero) => {
    dispatch(addFavoriteHero(hero))
  }

  const handleRemoveFavoriteHero = (id: number) => {
    dispatch(removeFavoriteHero(id))
  }

  return {
    handleAddFavoriteHero,
    handleRemoveFavoriteHero,
  }
}

export default useFavoriteHeroes
