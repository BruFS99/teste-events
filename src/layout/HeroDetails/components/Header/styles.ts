import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;

  gap: ${({ theme }) => theme.spacing.medium};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Brand = styled.img`
  width: 250px;
  height: auto;
`
