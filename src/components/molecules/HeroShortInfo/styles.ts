import styled from 'styled-components'

import SubTitle from 'components/atoms/Subtitle'
import { ITheme } from 'styles/Global'

interface IProps {
  theme: ITheme
}

const getGap = ({ theme }: IProps) => theme.spacing.nano

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getGap};
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${getGap};
`

export const TextInfo = styled(SubTitle)`
  font-size: ${({ theme }) => theme.font.size.medium};
`
