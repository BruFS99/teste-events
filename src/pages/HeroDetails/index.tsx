import { useParams } from 'react-router-dom'

import HeroDetailsLayout from 'layout/HeroDetails'

import Loading from 'components/atoms/Loading'
import SectionHero from 'components/organisms/SectionHero'
import ListComics from 'components/organisms/ListComics'

import useHero from 'hooks/useHero'
import useHeroComics from 'hooks/useHeroComics'

import { Container, ContainerLoading } from './styles'

function HeroDetails() {
  const { id } = useParams()

  const { hero, loading } = useHero({ id })
  const { comics, dateLastComic } = useHeroComics({ id })

  if (loading) {
    return (
      <ContainerLoading>
        <Loading />
      </ContainerLoading>
    )
  }

  return (
    <HeroDetailsLayout>
      <Container>
        <SectionHero
          isFavorite={false}
          onChangeFavorite={() => console.log('uai')}
          hero={hero}
          dateLastComic={dateLastComic}
        />
        <ListComics comics={comics} />
      </Container>
    </HeroDetailsLayout>
  )
}

export default HeroDetails
