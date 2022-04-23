import styled from 'styled-components'

import Text from 'components/atoms/Text'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
  width: 100%;
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
`
export const WrapperList = styled.ul`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: ${({ theme }) => theme.spacing.medium};

  width: 100%;
  height: 100%;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
