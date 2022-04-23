import React, { useEffect, useState } from 'react'

import { Container } from './styles'

interface IToggle {
  activeComponent: React.ReactNode
  disabledComponent: React.ReactNode
  initialValue: boolean
  onChange: Function
}

function Toggle({
  initialValue,
  activeComponent,
  disabledComponent,
  onChange,
}: IToggle) {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    const newValue = !active
    setActive(newValue)
    onChange(newValue)
  }

  useEffect(() => {
    setActive(initialValue)
  }, [initialValue])

  return (
    <Container onClick={handleClick}>
      {active ? activeComponent : disabledComponent}
    </Container>
  )
}

export default Toggle
