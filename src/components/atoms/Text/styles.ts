import styled from 'styled-components'

export const Container = styled.p`
  font-weight: ${({ theme }) => theme.font.weight.normal};
  font-size: ${({ theme }) => theme.font.size.small};
  color: ${({ theme }) => theme.colors.grayMedium};
`
