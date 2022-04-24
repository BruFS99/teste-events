import React from 'react'

import { Container } from './styles'

export interface ITitleShortInfoProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

function TitleShortInfo(props: ITitleShortInfoProps) {
  return <Container {...props} />
}

export default TitleShortInfo
