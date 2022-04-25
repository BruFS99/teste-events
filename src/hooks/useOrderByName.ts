import { useSelector } from 'react-redux'
import { IRootState } from 'store/ducks/rootReducer'

import useOrderByHeroes from 'store/ducks/OrderByListHeroes/useOrderByHeroes'

function useOrderByName() {
  const { OrderByListHeroes } = useSelector((state: IRootState) => state)
  const isOrderByName = OrderByListHeroes.orderBy === 'name'

  const { handleOrderBy } = useOrderByHeroes()

  const handleToggleOrderByName = () => {
    const newValue = isOrderByName ? '-name' : 'name'

    handleOrderBy(newValue)
  }

  return {
    isOrderByName,
    handleToggleOrderByName,
  }
}

export default useOrderByName
