import { useDispatch } from 'react-redux'

import { setOrderBy } from './actions'

function useOrderByHeroes() {
  const dispatch = useDispatch()

  const handleOrderBy = (newValue: string) => {
    dispatch(setOrderBy(newValue))
  }
  return {
    handleOrderBy,
  }
}

export default useOrderByHeroes
