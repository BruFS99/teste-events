import styled from 'styled-components'
import Input from 'components/atoms/Input'

import Icon from 'components/atoms/Icon'

export const Form = styled.form`
  position: relative;
  width: 100%;
  height: fit-content;
`
export const InputSearch = styled(Input)`
  height: 46px;
  background-color: ${({ theme }) => theme.colors.pinkLight};
  color: ${({ theme }) => theme.colors.red};

  padding-left: ${({ theme }) => theme.padding.xlarge};
  border-radius: ${({ theme }) => theme.border.radius.medium};

  &::placeholder {
    color: ${({ theme }) => theme.colors.red};
  }
`
export const IconSearch = styled(Icon)`
  position: absolute;
  top: 50%;
  left: 20px;

  transform: translateY(-50%);
`
