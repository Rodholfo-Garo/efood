import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'


function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container">
      Ola Mundo
      </div>
    </BrowserRouter>
  )
}

export default App
