import styled from 'styled-components'
import { ITheme } from 'styles/Global'

interface IProps {
  theme: ITheme
}

const getGap = ({ theme }: IProps) => theme.spacing.nano

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${getGap};
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${getGap};
`
