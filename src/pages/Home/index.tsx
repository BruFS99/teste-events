import FormSearch from 'components/molecules/FormSearch'
import ListHeroes from 'components/organisms/ListHeroes'
import HomeLayout from 'layout/Home'

import { Content, WrapperForm } from './styles'

function Home() {
  const handleSubmit = (e: string) => {
    console.log(e)
  }

  return (
    <HomeLayout>
      <Content>
        <WrapperForm>
          <FormSearch onSubmit={handleSubmit} />
        </WrapperForm>
        <ListHeroes />
      </Content>
    </HomeLayout>
  )
}

export default Home
