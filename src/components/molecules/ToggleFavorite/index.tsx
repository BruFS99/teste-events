import Toggle from 'components/molecules/Toggle'

import EmptyHeartIcon from 'assets/favorito_01.svg'
import FullHeartIcon from 'assets/favorito_02.svg'
import Icon from 'components/atoms/Icon'

interface IToggleFavoriteProps {
  initialValue: boolean
  onChange: Function
}

function ToggleFavorite({ initialValue, onChange }: IToggleFavoriteProps) {
  return (
    <Toggle
      value={initialValue}
      activeComponent={<Icon src={EmptyHeartIcon} size="14px" />}
      disabledComponent={<Icon src={FullHeartIcon} size="14px" />}
      onChange={onChange}
    />
  )
}

export default ToggleFavorite
