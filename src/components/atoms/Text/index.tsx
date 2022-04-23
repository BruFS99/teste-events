import React from 'react'
import { Container } from './styles'

export interface ITextProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

function Text(props: ITextProps) {
  return <Container {...props} />
}

export default Text
