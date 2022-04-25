import styled from 'styled-components'
import SubTitle from 'components/atoms/Subtitle'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};

  cursor: pointer;

  transition: 0.5s;

  &:hover {
    opacity: 0.8;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 300px;
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
  font-size: ${({ theme }) => theme.font.size.medium};
`
export const HeroInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
