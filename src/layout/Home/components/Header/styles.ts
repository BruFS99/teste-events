import styled from 'styled-components'

import BaseSubTitle from 'components/atoms/Subtitle'
import BaseText from 'components/atoms/Text'

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: ${({ theme }) => theme.spacing.nano};

  @media (max-width: 1400px) {
    padding: ${({ theme }) => theme.padding.small}
      ${({ theme }) => theme.padding.xsmall};
  }
`

export const Image = styled.img`
  height: auto;
  width: 230px;
`
export const SubTitle = styled(BaseSubTitle)`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.font.size.large};
`
export const Text = styled(BaseText)`
  @media (max-width: 768px) {
    text-align: center;
  }
`
