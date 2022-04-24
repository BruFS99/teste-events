import Text from 'components/atoms/Text'

import { Container } from './styles'

interface IErrorProps {
  text: string
}

function Error({ text }: IErrorProps) {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  )
}

export default Error
