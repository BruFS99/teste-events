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
  const { comics } = useHeroComics({ id })

  const getLastDateComic = (date: IComicDate) => date.type === 'onsaleDate'

  const lastComic = comics?.length ? comics[0] : null
  const dateLastComic = lastComic?.dates?.find(getLastDateComic)?.date || ''
  const dateLastComicFormatted = getDateFormatedBR(dateLastComic)

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
        <SectionHero hero={hero} dateLastComic={dateLastComicFormatted} />
        <ListComics comics={comics} />
      </Container>
    </HeroDetailsLayout>
  )
}

export default HeroDetails
