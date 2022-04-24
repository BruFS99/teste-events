import Icon from 'components/atoms/Icon'
import Action from 'components/molecules/Action'

import HeroIcon from 'assets/ic_heroi.svg'
import ToggleOff from 'assets/toggle_off.svg'
import ToggleOn from 'assets/toggle_on.svg'

import { Container } from './styles'

interface IOrderByNameProps {
  value: boolean
  handleClick: () => void
}

function OrderByName({ value, handleClick }: IOrderByNameProps) {
  const source = value ? ToggleOn : ToggleOff

  return (
    <Container>
      <Action
        initialValue={value}
        text="Ordenar por nome - A/Z"
        source={HeroIcon}
        onChange={handleClick}
      />
      <Icon src={source} size="48px" onClick={handleClick} />
    </Container>
  )
}

export default OrderByName
