import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;

  height: 100vh;
  width: 100%;

  max-width: 1368px;
`

export const Content = styled.div`
  margin: ${({ theme }) => theme.spacing.nano};
  display: flex;
  flex: 1;
`
