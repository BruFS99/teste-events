import React, { useState } from 'react'

import Icon from 'components/atoms/Icon'
import Action from 'components/molecules/Action'

import ToggleOff from 'assets/toggle_off.svg'
import ToggleOn from 'assets/toggle_on.svg'
import HeroIcon from 'assets/ic_heroi.svg'

import { Container } from './styles'

function OrderByName() {
  const [order, setOrder] = useState(false)

  const handleClick = () => {
    setOrder((prev) => !prev)
  }

  const source = order ? ToggleOn : ToggleOff

  return (
    <Container>
      <Action
        initialValue={order}
        text="Ordenar por nome - A/Z"
        source={HeroIcon}
        onChange={handleClick}
      />
      <Icon src={source} size="48px" onClick={handleClick} />
    </Container>
  )
}

export default OrderByName
