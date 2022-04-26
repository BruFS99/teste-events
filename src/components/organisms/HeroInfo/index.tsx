import { IHero } from 'services/Hero'

import LastComic from 'components/molecules/LastComic'
import HeroShortInfo from 'components/molecules/HeroShortInfo'
import ToggleFavorite from 'components/molecules/ToggleFavorite'
import Rating from 'components/molecules/Rating'

import IconComic from 'assets/ic_quadrinhos.svg'
import IconFilm from 'assets/ic_trailer.svg'

import {
  Description,
  Name,
  WrapperHeroInfo,
  WrapperNameAndFavorite,
  WrapperRatingHero,
  WrapperFilmAndComics,
} from './styles'

interface IHeroInfoProps {
  hero: IHero | null
  onChangeFavorite: Function
  dateLastComic: string
  isFavorite: boolean
}

function HeroInfo({
  hero,
  onChangeFavorite,
  dateLastComic,
  isFavorite,
}: IHeroInfoProps) {
  const { name, description, series, comics } = hero || {}

  return (
    <WrapperHeroInfo>
      <WrapperNameAndFavorite>
        <Name>{name}</Name>
        <ToggleFavorite
          initialValue={isFavorite}
          onChange={(newValueFavorite: boolean) =>
            onChangeFavorite(hero, newValueFavorite)
          }
          size="30px"
        />
      </WrapperNameAndFavorite>
      <Description>{description}</Description>
      <WrapperRatingHero>
        <WrapperFilmAndComics>
          <HeroShortInfo
            title="Quadrinhos"
            icon={IconComic}
            number={comics?.available}
          />

          <HeroShortInfo
            title="Filmes"
            icon={IconFilm}
            number={series?.available}
          />
        </WrapperFilmAndComics>

        <Rating title="Rating" number={5} />

        <LastComic title="Último quadrinho" value={dateLastComic} />
      </WrapperRatingHero>
    </WrapperHeroInfo>
  )
}

export default HeroInfo
