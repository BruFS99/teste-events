import styled from 'styled-components'

import Text from 'components/atoms/Text'
import SubTitle from 'components/atoms/Subtitle'

import { ITheme } from 'styles/Global'

interface IProps {
  theme: ITheme
}

const getGap = ({ theme }: IProps) => theme.spacing.medium

export const Container = styled.section`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 2fr 4fr;
  grid-gap: ${getGap};

  height: 100%;
  width: 100%;

  position: relative;

  @media (max-width: 1400px) {
    grid-template-columns: 2fr 2fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const Name = styled(SubTitle)`
  font-size: ${({ theme }) => theme.font.size.xlarge};
  text-transform: uppercase;
`

export const Description = styled(Text)`
  line-height: ${({ theme }) => theme.font.lineHeight.medium};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
`
export const Image = styled.img`
  width: auto;
  height: 400px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`
export const BackgroundName = styled.div`
  font-size: 17em;
  letter-spacing: ${({ theme }) => theme.spacing.medium};
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  z-index: 0;
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

export const WrapperHeroImage = styled.div`
  display: flex;
  justify-content: center;
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
