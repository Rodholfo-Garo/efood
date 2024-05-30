import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'
import Banner from './components/Banner'
import ProductList from './components/ProductsList'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Banner />
      <ProductList />
    </BrowserRouter>
  )
}

export default App
