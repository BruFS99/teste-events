import styled from 'styled-components'
import SubTitle from 'components/atoms/Subtitle'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.large};
  max-width: 200px;
`

export const Image = styled.img`
  width: 200px;
  height: 300px;
`

export const Bar = styled.div`
  width: 100%;
  height: 4px;
  background: red;
`

export const Title = styled(SubTitle)`
  font-size: ${({ theme }) => theme.font.size.small};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
