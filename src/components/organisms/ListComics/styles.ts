import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.large};
  height: 100%;
`

export const WrapperList = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  gap: ${({ theme }) => theme.spacing.xlarge};

  @media (max-width: 768px) {
    justify-content: center;
  }
`
