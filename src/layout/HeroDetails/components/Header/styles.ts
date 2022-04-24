import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;

  gap: ${({ theme }) => theme.spacing.nano};
`

export const Brand = styled.img`
  width: 250px;
  height: auto;
`
