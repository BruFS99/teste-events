import React from 'react'
import { Image } from './styles'

export interface IIconProps extends React.HTMLAttributes<HTMLImageElement> {
  src: string
  size?: string
}

function Icon(props: IIconProps) {
  return <Image {...props} />
}

export default Icon
