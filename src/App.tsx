import { ThemeProvider } from 'styled-components'
import theme from 'themes'
import GlobalStyles from 'styles/Global'
import Routes from 'Routes'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </div>
  )
}

export default App
