import React from 'react'

import { IHero } from 'services/Hero'
import HeroInfo from 'components/organisms/HeroInfo'

import { Container, Image, WrapperHeroImage } from './styles'

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
      <HeroInfo
        hero={hero}
        dateLastComic={dateLastComic}
        onChangeFavorite={onChangeFavorite}
        isFavorite={isFavorite}
      />
      <WrapperHeroImage>
        <Image src={`${hero?.thumbnail.path}.${hero?.thumbnail.extension}`} />
      </WrapperHeroImage>
    </Container>
  )
}

export default SectionHero
