import styled from 'styled-components'
import SubTitle from 'components/atoms/Subtitle'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.large};
`

export const Image = styled.img`
  width: 100%;
  height: 335px;
`

export const Bar = styled.div`
  width: 100%;
  height: 4px;
  background: red;
`
export const WrapperImage = styled.div`
  display: flex;
  flex-direction: column;
`
export const Name = styled(SubTitle)`
  font-size: ${({ theme }) => theme.font.size.small};
`
export const HeroInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
