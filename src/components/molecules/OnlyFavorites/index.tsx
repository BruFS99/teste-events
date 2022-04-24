import Action from 'components/molecules/Action'

import EmptyHeartIcon from 'assets/favorito_02.svg'
import FullHeartIcon from 'assets/favorito_01.svg'

import { Container } from './styles'

interface IOnlyFavoritesProps {
  value: boolean
  onChange: Function
}

function OnlyFavorites({ value, onChange }: IOnlyFavoritesProps) {
  const source = value ? FullHeartIcon : EmptyHeartIcon

  return (
    <Container onClick={() => onChange()}>
      <Action
        initialValue={value}
        text="Somente favoritos"
        source={source}
        onChange={onChange}
      />
    </Container>
  )
}

export default OnlyFavorites
