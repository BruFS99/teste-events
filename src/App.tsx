import { ThemeProvider } from 'styled-components'
import theme from 'themes'
import GlobalStyles from 'styles/Global'
import Routes from 'Routes'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
        <Routes />
      </div>
    </ThemeProvider>
  )
}

export default App
