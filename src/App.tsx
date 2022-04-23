import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import Routes from 'Routes'

import theme from 'themes'
import GlobalStyles from 'styles/Global'

import { store, persistor } from './store'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <div className="App">
            <GlobalStyles />
            <Routes />
          </div>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
