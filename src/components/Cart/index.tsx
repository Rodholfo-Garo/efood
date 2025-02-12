import Button from '../Button'
import Delivery from '../Delivery'
import Payment from '../Payment'
import Confirm from '../Confirm'

import { RootReducer } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { close, remove, nextStep } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'

import * as S from './styles'
const Cart = () => {
  const { isOpen, items, checkout } = useSelector(
    (state: RootReducer) => state.cart
  )

  const dispatch = useDispatch()
  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((accumulator, currentItem) => {
      return (accumulator += currentItem.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.SideBar>
        {checkout === 'cart' ? (
          items.length === 0 ? (
            // Se o carrinho estiver vazio, exibe apenas esta mensagem
            <p>
              Seu carrinho está vazio. Volte ao restaurante e escolha um
              produto!
            </p>
          ) : (
            <>
              <ul>
                {items.map((item) => (
                  <S.CartItem key={item.id}>
                    <img src={item.foto} alt={item.nome} />
                    <div>
                      <h3>{item.nome}</h3>
                      <span>{parseToBrl(item.preco)}</span>
                    </div>
                    <button onClick={() => removeItem(item.id)} type="button" />
                  </S.CartItem>
                ))}
              </ul>
              <S.Prices>
                Valor Total <span>{parseToBrl(getTotalPrice())}</span>
              </S.Prices>
              <Button
                onClick={() => dispatch(nextStep())}
                title="Cliqe aqui para compra"
                type="button"
              >
                Continuar com a entrega
              </Button>
            </>
          )
        ) : (
          <>
            {checkout === 'delivery' && <Delivery />}
            {checkout === 'payment' && <Payment />}
            {checkout === 'confirm' && <Confirm />}
          </>
        )}
      </S.SideBar>
    </S.CartContainer>
  )
}

export default Cart
