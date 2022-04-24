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
  const handleClick = () => onClick(id)

  return (
    <Container>
      <WrapperImage onClick={handleClick}>
        <Image src={src} alt={name} />
        <Bar />
      </WrapperImage>
      <HeroInfo>
        <Name onClick={handleClick}>{name}</Name>
        <ToggleFavorite initialValue={isFavorite} onChange={onFavoriteChange} />
      </HeroInfo>
    </Container>
  )
}

export default HeroCard
