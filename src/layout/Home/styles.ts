import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
  width: 100%;
`

export const Content = styled.div`
  margin: ${({ theme }) => theme.spacing.nano} auto;

  display: flex;
  flex: 1;

  width: 100%;
  max-width: 1368px;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1400px) {
    padding: ${({ theme }) => theme.padding.small}
      ${({ theme }) => theme.padding.xsmall};
  }
`
