import styled from 'styled-components'

import Text from 'components/atoms/Text'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
  width: 100%;
  height: 100%;
`

export const Header = styled.header`
  display: flex;
  align-items: center;

  justify-content: space-between;
`

export const WrapperActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.small};
`

export const TextInfo = styled(Text)`
  color: ${({ theme }) => theme.colors.grayLight};
  font-size: ${({ theme }) => theme.font.size.medium};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  letter-spacing: 1px;
`
