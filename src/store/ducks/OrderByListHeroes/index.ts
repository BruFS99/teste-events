import OrderByListHeroesTypes from './types'
import { IActionSetOrderBy } from './actions'

export interface IOrderByListHeroes {
  orderBy: string
}

const INITIAL_STATE = {
  orderBy: 'name',
}

const reducer = (state = INITIAL_STATE, action: IActionSetOrderBy) => {
  switch (action.type) {
    case OrderByListHeroesTypes.SET_ORDER_BY:
      return { orderBy: action.payload.orderBy }

    default:
      return state
  }
}

export default reducer
