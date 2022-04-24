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
  const component = <Icon src={source} onClick={() => onChange()} />

  return (
    <Container>
      <Toggle
        value={initialValue}
        activeComponent={component}
        disabledComponent={component}
        onChange={onChange}
      />
      <Label>{text}</Label>
    </Container>
  )
}

export default Action
