import GlobalStyles from './styles/global'
import { ThemeProvider } from 'styled-components'
import dark from './styles/themes/dark'
import Routes from './routes'

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={dark}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </>
  )
}

export default App
