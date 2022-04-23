import React from 'react'
import { Container } from './styles'

export interface ISubTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

function SubTitle(props: ISubTitleProps) {
  return <Container {...props} />
}

export default SubTitle
