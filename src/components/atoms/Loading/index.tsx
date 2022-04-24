import { Container } from './styles'

interface ILoadingProps {
  size?: string
}

function Loading({ size = '40px' }: ILoadingProps) {
  return (
    <Container size={size}>
      <div />
      <div />
      <div />
      <div />
    </Container>
  )
}

export default Loading
