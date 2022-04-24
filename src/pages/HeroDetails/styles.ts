import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 1368px;
  margin: ${({ theme }) => theme.spacing.medium} auto;
`
