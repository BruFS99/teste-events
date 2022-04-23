import { useSelector } from 'react-redux'

import Icon from 'components/atoms/Icon'
import Action from 'components/molecules/Action'

import { IRootState } from 'store/ducks/rootReducer'

import useOrderByHeroes from 'store/ducks/OrderByListHeroes/useOrderByHeroes'

import ToggleOff from 'assets/toggle_off.svg'
import ToggleOn from 'assets/toggle_on.svg'
import HeroIcon from 'assets/ic_heroi.svg'

import { Container } from './styles'

function OrderByName() {
  const { OrderByListHeroes } = useSelector((state: IRootState) => state)
  const isOrderByName = OrderByListHeroes.orderBy === 'name'

  const { handleOrderBy } = useOrderByHeroes()

  const handleClick = () => {
    const newValue = isOrderByName ? '-name' : 'name'

    handleOrderBy(newValue)
  }

  const source = isOrderByName ? ToggleOn : ToggleOff

  return (
    <Container>
      <Action
        initialValue={isOrderByName}
        text="Ordenar por nome - A/Z"
        source={HeroIcon}
        onChange={handleClick}
      />
      <Icon src={source} size="48px" onClick={handleClick} />
    </Container>
  )
}

export default OrderByName
