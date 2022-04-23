import styled from 'styled-components'

import Text from 'components/atoms/Text'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.nano};

  transition: 0.5s;

  cursor: pointer;

  &:hover {
    opacity: 0.8s;
  }
`

export const Label = styled(Text)`
  color: ${({ theme }) => theme.colors.red};
`
