import ToggleFavorite from 'components/molecules/ToggleFavorite'
import { Bar, Container, HeroInfo, Image, Name, WrapperImage } from './styles'

interface ICardProps {
  id: number
  src: string
  name: string
  isFavorite: boolean
  onFavoriteChange: Function
  onClick: Function
}

function HeroCard({
  id,
  src,
  name,
  isFavorite,
  onFavoriteChange,
  onClick,
}: ICardProps) {
  return (
    <Container onClick={() => onClick(id)}>
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
