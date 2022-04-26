import styled from 'styled-components'

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
export const Image = styled.img`
  width: auto;
  height: 400px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`

export const WrapperHeroImage = styled.div`
  display: flex;
  justify-content: center;
`
