import Action from 'components/molecules/Action'

import HeroIcon from 'assets/ic_heroi.svg'
import ToggleOff from 'assets/toggle_off.svg'
import ToggleOn from 'assets/toggle_on.svg'

import { Container, ToggleIcon } from './styles'

interface IOrderByNameProps {
  value: boolean
  handleClick: Function
}

function OrderByName({ value, handleClick }: IOrderByNameProps) {
  const source = value ? ToggleOn : ToggleOff

  return (
    <Container onClick={() => handleClick()}>
      <Action
        initialValue={value}
        text="Ordenar por nome - A/Z"
        source={HeroIcon}
        onChange={handleClick}
      />
      <ToggleIcon src={source} size="48px" />
    </Container>
  )
}

export default OrderByName
