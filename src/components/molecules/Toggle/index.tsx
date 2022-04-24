import React from 'react'

import { Container } from './styles'

interface IToggle {
  activeComponent: React.ReactNode
  disabledComponent: React.ReactNode
  value: boolean
  onChange: Function
}

function Toggle({
  value,
  activeComponent,
  disabledComponent,
  onChange,
}: IToggle) {
  const handleClick = () => {
    const newValue = !value
    onChange(newValue)
  }

  return (
    <Container onClick={handleClick}>
      {value ? activeComponent : disabledComponent}
    </Container>
  )
}

export default Toggle
