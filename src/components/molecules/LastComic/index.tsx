import Title from 'components/atoms/TitleShortInfo'

import { Container, Value } from './styles'

interface ILastComicProps {
  title: string
  value: string
}

function LastComic({ value, title }: ILastComicProps) {
  return (
    <Container>
      <Title>{title}:</Title>
      <Value>{value}</Value>
    </Container>
  )
}

export default LastComic
