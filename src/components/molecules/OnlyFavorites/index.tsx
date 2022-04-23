import React, { useState } from 'react'

import Action from 'components/molecules/Action'

import EmptyHeartIcon from 'assets/favorito_01.svg'
import FullHeartIcon from 'assets/favorito_02.svg'

import { Container } from './styles'

function OnlyFavorites() {
  const [favorites, setFavorites] = useState(false)

  const handleClick = () => {
    setFavorites((prev) => !prev)
  }

  const source = favorites ? FullHeartIcon : EmptyHeartIcon

  return (
    <Container>
      <Action
        text="Ordenar por nome - A/Z"
        source={source}
        onClick={handleClick}
      />
    </Container>
  )
}

export default OnlyFavorites
