import FormSearch from 'components/molecules/FormSearch'
import HomeLayout from 'layout/Home'

import { WrapperForm } from './styles'

function Home() {
  const handleSubmit = (e: string) => {
    console.log(e)
  }

  return (
    <HomeLayout>
      <WrapperForm>
        <FormSearch onSubmit={handleSubmit} />
      </WrapperForm>
    </HomeLayout>
  )
}

export default Home
