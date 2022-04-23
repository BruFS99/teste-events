import { useDispatch } from 'react-redux'
import { IHero } from 'services/Hero'

import { addFavoriteHero } from './actions'

function useFavoriteHeroes() {
  const dispatch = useDispatch()

  const handleAddFavoriteHero = (hero: IHero) => {
    dispatch(addFavoriteHero(hero))
  }
  return {
    handleAddFavoriteHero,
  }
}

export default useFavoriteHeroes
