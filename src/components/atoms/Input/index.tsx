import React from 'react'
import { Container } from './styles'

export interface IInputProps extends React.HTMLAttributes<HTMLInputElement> {
  name: string
}

function Input(props: IInputProps) {
  return <Container {...props} />
}

export default Input
