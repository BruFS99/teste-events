import { useSearchParams } from 'react-router-dom'

import FormSearch from 'components/molecules/FormSearch'
import SectionHeroes from 'components/organisms/SectionHeroes'
import HomeLayout from 'layout/Home'

import { Content, WrapperForm } from './styles'

function Home() {
  const [, setSearchParams] = useSearchParams()

  const handleSubmit = (search: string) => {
    if (!search) {
      setSearchParams({})
      return
    }

    setSearchParams({ search })
  }

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
