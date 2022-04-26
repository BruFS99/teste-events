import styled from 'styled-components'

import Text from 'components/atoms/Text'
import SubTitle from 'components/atoms/Subtitle'

import { ITheme } from 'styles/Global'

interface IProps {
  theme: ITheme
}

const getGap = ({ theme }: IProps) => theme.spacing.medium

export const Name = styled(SubTitle)`
  font-size: ${({ theme }) => theme.font.size.xlarge};
  text-transform: uppercase;
`

export const Description = styled(Text)`
  line-height: ${({ theme }) => theme.font.lineHeight.medium};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
`

export const WrapperNameAndFavorite = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${getGap};
`

export const WrapperHeroInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.large};
`

export const WrapperRatingHero = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};
`
export const WrapperFilmAndComics = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  gap: ${({ theme }) => theme.spacing.xsmall};
`
