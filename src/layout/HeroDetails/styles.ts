import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
  width: 100%;

  background: rgba(0, 255, 0, 0.3);
`

export const Content = styled.div`
  margin: ${({ theme }) => theme.spacing.nano} auto;

  display: flex;
  flex: 1;

  width: 100%;
  max-width: 1368px;
`

export const WrapperHeader = styled.div`
  width: 100%;
  max-width: 1368px;
  margin: 0 auto;

  padding-top: ${({ theme }) => theme.padding.medium};
`
