
import ReactDOM from 'react-dom/client'
import { AppRoutes } from './pages/Routes'
import { GlobalStyle } from './styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import Theme from './styles/Theme'


ReactDOM.createRoot(document.getElementById('root')!).render(

    <ThemeProvider theme={Theme}>

      <GlobalStyle />
      <AppRoutes />

    </ThemeProvider>

)
