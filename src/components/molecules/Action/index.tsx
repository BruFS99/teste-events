import Icon from 'components/atoms/Icon'
import Toggle from 'components/molecules/Toggle'

import { Container, Label } from './styles'

interface IActionsProps {
  initialValue: boolean
  text: string
  source: string
  onChange: Function
}

function Action({ initialValue, text, source, onChange }: IActionsProps) {
  return (
    <Container>
      <Toggle
        initialValue={initialValue}
        activeComponent={<Icon src={source} />}
        disabledComponent={<Icon src={source} />}
        onChange={onChange}
      />
      <Label>{text}</Label>
    </Container>
  )
}

export default Action
