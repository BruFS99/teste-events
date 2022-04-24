import styled from 'styled-components'
import Input from 'components/atoms/Input'

import Icon from 'components/atoms/Icon'

import { ITheme } from 'styles/Global'

interface Props {
  isLight: boolean
  theme: ITheme
}

const getColorsInput = ({ theme, isLight }: Props) => {
  if (isLight) {
    return {
      color: theme.colors.gray,
      background: theme.colors.white,
    }
  }

  return {
    color: theme.colors.red,
    background: theme.colors.pinkLight,
  }
}

export const Form = styled.form`
  position: relative;
  width: 100%;
  height: fit-content;
`

export const InputSearch = styled(Input)<Props>`
  height: 46px;
  background-color: ${(props) => getColorsInput(props).background};
  color: ${(props) => getColorsInput(props).color};

  padding-left: ${({ theme }) => theme.padding.xlarge};
  border-radius: ${({ theme }) => theme.border.radius.medium};

  &::placeholder {
    color: ${(props) => getColorsInput(props).color};
  }
`
export const IconSearch = styled(Icon)`
  position: absolute;
  top: 50%;
  left: 20px;

  transform: translateY(-50%);
`
