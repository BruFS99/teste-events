import styled from 'styled-components'

interface IImageProps {
  size?: string
}

const getSize = ({ size }: IImageProps) => size || '20px'

export const Image = styled.img`
  height: ${getSize};
  width: ${getSize};
`
