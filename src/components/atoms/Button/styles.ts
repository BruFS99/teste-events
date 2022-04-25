import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.red};
  width: 100%;
  padding: ${({ theme }) => theme.padding.xsmall}
    ${({ theme }) => theme.padding.small};

  border-radius: ${({ theme }) => theme.border.radius.xsmall};

  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.85;
  }
`
