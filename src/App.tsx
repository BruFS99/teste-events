import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

import Routes from 'Routes'

import theme from 'themes'
import GlobalStyles from 'styles/Global'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <GlobalStyles />
          <Routes />
        </div>
      </ThemeProvider>
    </Provider>
  )
}

export default App
