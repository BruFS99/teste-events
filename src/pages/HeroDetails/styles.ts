import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 1368px;
  margin: ${({ theme }) => theme.spacing.xlarge} auto;

  gap: ${({ theme }) => theme.spacing.xlarge};
`
export const ContainerLoading = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
`
