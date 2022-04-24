import { Image, Container, Title } from './styles'

interface IComicCard {
  title: string
  src: string
}

function ComicCard({ title, src }: IComicCard) {
  return (
    <Container>
      <Image src={src} alt={title} />
      <Title>{title}</Title>
    </Container>
  )
}

export default ComicCard
