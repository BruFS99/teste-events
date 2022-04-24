import Icon from 'components/atoms/Icon'

import Title from 'components/atoms/TitleShortInfo'

import { Container, Wrapper, TextInfo } from './styles'

interface IHeroShortInfoProps {
  title: string
  icon: string
  number: string | undefined
}

function HeroShortInfo({ icon, number, title }: IHeroShortInfoProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Wrapper>
        <Icon src={icon} size="24px" />
        <TextInfo>{number}</TextInfo>
      </Wrapper>
    </Container>
  )
}

export default HeroShortInfo
