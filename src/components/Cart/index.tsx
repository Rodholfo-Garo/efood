import Button from '../Button'
import { Overlay, CartContainer, SideBar, Prices, CartItem } from './styles'
import { RootReducer } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { close, remove, nextStep } from '../../store/reducers/cart'
import { formataPreco } from '../PerfilList'
import Delivery from '../Delivery'
import Payment from '../Payment'
import Confirm from '../Confirm'

const Cart = () => {
  const { isOpen, items, checkout } = useSelector(
    (state: RootReducer) => state.cart
  )

  const dispatch = useDispatch()
  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        {checkout === 'cart' && (
          <>
            <ul>
              {items.map((item) => (
                <CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>{formataPreco(item.preco)}</span>
                  </div>
                  <button onClick={() => removeItem(item.id)} type="button" />
                </CartItem>
              ))}
            </ul>
            <Prices>
              Valor Total <span>{formataPreco(getTotalPrice())}</span>
            </Prices>
            <Button
              onClick={() => dispatch(nextStep())}
              title="Cliqe aqui para compra"
              type="button"
            >
              Continuar com a entrega
            </Button>
          </>
        )}
        {checkout === 'delivery' && <Delivery />}
        {checkout === 'payment' && <Payment />}
        {checkout === 'confirm' && <Confirm />}
      </SideBar>
    </CartContainer>
  )
}

export default Cart
