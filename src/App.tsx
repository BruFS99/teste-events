import { useEffect } from 'react'
import { AxiosResponse, AxiosError } from 'axios'

import HeroServices from 'services/Hero'

import GlobalStyles from 'styles/Global'

function App() {
  useEffect(() => {
    HeroServices.getHeroes()
      .then((response: AxiosResponse) => {
        const { data } = response
        console.log(data)
      })
      .catch((error: AxiosError) => {
        console.log(error)
      })
  }, [])

  return (
    <div className="App">
      <GlobalStyles />
      <span>App</span>
    </div>
  )
}

export default App
