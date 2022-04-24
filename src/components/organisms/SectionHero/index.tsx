import React from 'react'

import LastComic from 'components/molecules/LastComic'
import HeroShortInfo from 'components/molecules/HeroShortInfo'
import ToggleFavorite from 'components/molecules/ToggleFavorite'
import Rating from 'components/molecules/Rating'

import { IHero } from 'services/Hero'

import IconComic from 'assets/ic_quadrinhos.svg'
import IconFilm from 'assets/ic_trailer.svg'

import {
  // BackgroundName,
  Container,
  Description,
  Name,
  Image,
  WrapperHeroInfo,
  WrapperHeroImage,
  WrapperNameAndFavorite,
  WrapperRatingHero,
  WrapperFilmAndComics,
} from './styles'

interface ISectionHeroProps {
  hero: IHero | null
  dateLastComic: string
  onChangeFavorite: Function
  isFavorite: boolean
}

function SectionHero({
  hero,
  onChangeFavorite,
  isFavorite,
  dateLastComic,
}: ISectionHeroProps) {
  return (
    <Container>
      {/* <BackgroundName>{String(hero?.name).toUpperCase()}</BackgroundName> */}
      <WrapperHeroInfo>
        <WrapperNameAndFavorite>
          <Name>{hero?.name}</Name>
          <ToggleFavorite
            initialValue={isFavorite}
            onChange={onChangeFavorite}
            size="30px"
          />
        </WrapperNameAndFavorite>
        <Description>{hero?.description}</Description>

        <WrapperRatingHero>
          <WrapperFilmAndComics>
            <HeroShortInfo
              title="Quadrinhos"
              icon={IconComic}
              number={hero?.comics?.available}
            />

            <HeroShortInfo
              title="Filmes"
              icon={IconFilm}
              number={hero?.series?.available}
            />
          </WrapperFilmAndComics>

          <Rating title="Rating" number={5} />

          <LastComic title="Último quadrinho" value={dateLastComic} />
        </WrapperRatingHero>
      </WrapperHeroInfo>
      <WrapperHeroImage>
        <Image src={`${hero?.thumbnail.path}.${hero?.thumbnail.extension}`} />
      </WrapperHeroImage>
    </Container>
  )
}

export default SectionHero
