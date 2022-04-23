import ToggleFavorite from 'components/molecules/ToggleFavorite'
import { Bar, Container, HeroInfo, Image, Name, WrapperImage } from './styles'

interface ICardProps {
  src: string
  name: string
  isFavorite: boolean
  onFavoriteChange: Function
}

function HeroCard({ src, name, isFavorite, onFavoriteChange }: ICardProps) {
  return (
    <Container>
      <WrapperImage>
        <Image src={src} alt={name} />
        <Bar />
      </WrapperImage>
      <HeroInfo>
        <Name>{name}</Name>
        <ToggleFavorite initialValue={isFavorite} onChange={onFavoriteChange} />
      </HeroInfo>
    </Container>
  )
}

export default HeroCard
