import styled from 'styled-components'

import Icon from 'components/atoms/Icon'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.nano};
`
export const ToggleIcon = styled(Icon)`
  cursor: pointer;
`
