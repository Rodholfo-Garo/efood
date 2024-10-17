import Button from '../Button'
import { Overlay, CartContainer, SideBar, Prices, CartItem } from './styles'
import Pizza from '../../assets/images/pizzaPerfil.png'

const Cart = () => (
  <CartContainer>
    <Overlay />
    <SideBar>
      <ul>
        <CartItem>
          <img src={Pizza} />
          <div>
            <h3>Nome do Prato</h3>
            <span>R$69,00</span>
          </div>
          <button type="button" />
        </CartItem>
        <CartItem>
          <img src={Pizza} />
          <div>
            <h3>Nome do Prato</h3>
            <span>R$69,00</span>
          </div>
          <button type="button" />
        </CartItem>
      </ul>
      <Prices>
        Valor Total <span>R$190,00</span>
      </Prices>
      <Button title="Cliqe aqui para compra" type="button">
        Continuar com a entrega
      </Button>
    </SideBar>
  </CartContainer>
)

export default Cart
