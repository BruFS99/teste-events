import SubTitle from 'components/atoms/Subtitle'
import styled from 'styled-components'
import { ITheme } from 'styles/Global'

interface IProps {
  theme: ITheme
}

const getGap = ({ theme }: IProps) => theme.spacing.nano

export const Container = styled.div`
  display: flex;
  align-items: baseline;
  gap: ${getGap};
`

export const Value = styled(SubTitle)`
  font-size: ${({ theme }) => theme.font.size.xsmall};
`
