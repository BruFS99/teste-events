import Error from 'components/atoms/Error'
import SubTitle from 'components/atoms/Subtitle'
import ComicCard from 'components/molecules/ComicCard'
import { IComic } from 'services/Hero'

import { Container, WrapperList } from './styles'

interface IListComicsProps {
  comics: IComic[] | null
}

function ListComics({ comics }: IListComicsProps) {
  if (!comics) {
    return <div />
  }

  return (
    <Container>
      <SubTitle>Últimos lançamentos</SubTitle>
      <WrapperList>
        {!comics.length ? (
          <Error text="Não há informações sobre os ultimos lançamentos" />
        ) : (
          comics.map((comic) => (
            <ComicCard
              {...comic}
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            />
          ))
        )}
      </WrapperList>
    </Container>
  )
}

export default ListComics
