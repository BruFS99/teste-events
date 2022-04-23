import styled from 'styled-components'

import BaseSubTitle from 'components/atoms/Subtitle'

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: ${({ theme }) => theme.spacing.nano};
`

export const Image = styled.img`
  height: auto;
  width: 230px;
`
export const SubTitle = styled(BaseSubTitle)`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.font.size.large};
`
