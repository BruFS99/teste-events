import React from 'react'

import { Container } from './styles'

export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

function Button(props: IButtonProps) {
  return <Container {...props} />
}

export default Button
