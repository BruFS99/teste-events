import { combineReducers } from 'redux'

import OrderByListHeroes, { IOrderByListHeroes } from './OrderByListHeroes'

export interface IRootState {
  OrderByListHeroes: IOrderByListHeroes
}

const appReducer = combineReducers({
  OrderByListHeroes,
})

export default appReducer
