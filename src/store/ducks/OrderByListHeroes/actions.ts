import Types from './types'

export interface IActionSetOrderBy {
  type: string
  payload: {
    orderBy: string
  }
}

export const setOrderBy = (orderBy: string) => ({
  type: Types.SET_ORDER_BY,
  payload: {
    orderBy,
  },
})
