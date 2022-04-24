import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import { IRootState } from 'store/ducks/rootReducer'
import { IHero } from 'services/Hero'

import { addFavoriteHero, removeFavoriteHero } from './actions'

const CONFIG = {
  maxFavorites: 5,
}

function useFavoriteHeroes() {
  const {
    FavoriteHeroes: { favorites },
  } = useSelector((state: IRootState) => state)

  const dispatch = useDispatch()

  const handleAddFavoriteHero = (hero: IHero) => {
    dispatch(addFavoriteHero(hero))
  }

  const handleRemoveFavoriteHero = (id: number) => {
    dispatch(removeFavoriteHero(id))
  }

  const handleFavoriteChange = (hero: IHero, newValueFavorite: boolean) => {
    const limit = CONFIG.maxFavorites
    const canAdd = favorites.length < limit

    if (!canAdd && newValueFavorite) {
      toast.error(
        'Você atingiu o limite de heróis para favoritar. Para que consiga favoritar este herói, remova algum de sua lista'
      )
      return
    }

    if (newValueFavorite) {
      handleAddFavoriteHero(hero)
    } else {
      handleRemoveFavoriteHero(hero.id)
    }
  }

  return {
    handleFavoriteChange,
    favorites,
  }
}

export default useFavoriteHeroes
