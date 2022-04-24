import Icon from 'components/atoms/Icon'

import RatingIcon from 'assets/avaliacao_on.svg'
import Title from 'components/atoms/TitleShortInfo'

import { Container, Wrapper } from './styles'

interface IRatingProps {
  title: string
  number: number
}

function Rating({ number, title }: IRatingProps) {
  const quantity = new Array(number).fill('')

  return (
    <Container>
      <Title>{title}:</Title>
      <Wrapper>
        {quantity.map(() => (
          <Icon src={RatingIcon} size="16px" />
        ))}
      </Wrapper>
    </Container>
  )
}

export default Rating
