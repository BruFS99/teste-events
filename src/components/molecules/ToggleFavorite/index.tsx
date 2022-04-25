import Toggle from 'components/molecules/Toggle'

import EmptyHeartIcon from 'assets/favorito_01.svg'
import FullHeartIcon from 'assets/favorito_02.svg'
import Icon from 'components/atoms/Icon'

interface IToggleFavoriteProps {
  initialValue: boolean
  onChange: Function
  size?: string
}

function ToggleFavorite({
  initialValue,
  onChange,
  size,
}: IToggleFavoriteProps) {
  const sizeIcon = size || '18px'

  return (
    <Toggle
      value={initialValue}
      activeComponent={<Icon src={EmptyHeartIcon} size={sizeIcon} />}
      disabledComponent={<Icon src={FullHeartIcon} size={sizeIcon} />}
      onChange={onChange}
    />
  )
}

export default ToggleFavorite
