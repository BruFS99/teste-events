import FormSearch from 'components/molecules/FormSearch'
import SectionHeroes from 'components/organisms/SectionHeroes'
import HomeLayout from 'layout/Home'

import useSearch from 'hooks/useSearch'

import { Content, WrapperForm } from './styles'

function Home() {
  const { handleSubmit } = useSearch()

  return (
    <HomeLayout>
      <Content>
        <WrapperForm>
          <FormSearch onSubmit={handleSubmit} />
        </WrapperForm>
        <SectionHeroes />
      </Content>
    </HomeLayout>
  )
}

export default Home
