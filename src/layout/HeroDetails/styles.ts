import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
  width: 100%;

  // Por conta das imagens, deixei nesta cor default, infelizmente não achei as props de cores do personagem
  background: rgba(0, 0, 0, 0.06);
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
