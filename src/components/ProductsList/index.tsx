import Product from '../Products'
import { Lista } from './styles'

export const ProductList = () => (
  <>
    <div className="container">
      <Lista>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </Lista>
    </div>
  </>
)

export default ProductList
