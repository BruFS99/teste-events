import styled from 'styled-components'

export const Container = styled.h2`
  font-weight: ${({ theme }) => theme.font.weight.black};
  font-size: ${({ theme }) => theme.font.size.large};
  color: ${({ theme }) => theme.colors.gray};
`
