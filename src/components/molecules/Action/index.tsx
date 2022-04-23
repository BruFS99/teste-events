import Icon from 'components/atoms/Icon'

import { Container, Label } from './styles'

interface IActionsProps {
  text: string
  source: string
  onClick: () => void
}

function Action({ text, source, onClick }: IActionsProps) {
  return (
    <Container onClick={onClick}>
      <Icon src={source} />
      <Label>{text}</Label>
    </Container>
  )
}

export default Action
