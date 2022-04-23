import { combineReducers } from 'redux'

import OrderByListHeroes, { IOrderByListHeroes } from './OrderByListHeroes'
import FavoriteHeroes, { IFavoriteHeroes } from './FavoriteHeroes'

export interface IRootState {
  OrderByListHeroes: IOrderByListHeroes
  FavoriteHeroes: IFavoriteHeroes
}

const appReducer = combineReducers({
  OrderByListHeroes,
  FavoriteHeroes,
})

export default appReducer
