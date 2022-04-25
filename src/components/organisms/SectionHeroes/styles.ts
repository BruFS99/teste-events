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

  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.small};
  }
`

export const WrapperActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.small};

  @media (max-width: 768px) {
    gap: ${({ theme }) => theme.spacing.quark};
    flex-direction: column;
  }
`

export const TextInfo = styled(Text)`
  color: ${({ theme }) => theme.colors.grayLight};
  font-size: ${({ theme }) => theme.font.size.medium};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  letter-spacing: 1px;
`

export const WrapperLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`
