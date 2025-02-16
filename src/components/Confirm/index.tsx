import { useDispatch, useSelector } from 'react-redux'

import Button from '../Button'
import FormCard from '../FormCard'
import { RootReducer } from '../../store'
import { prevStep } from '../../store/reducers/cart'

import { ConfirmText } from './styles'

const Confirm = () => {
  const dispatch = useDispatch()

  const { orderId } = useSelector((state: RootReducer) => state.cart)

  // Verifica se o pedido foi concluído com sucesso e se temos dados para exibir

  return (
    <>
      <FormCard title={`Pedido realizado - ${orderId || 'Processando...'}`}>
        <ConfirmText>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>
          <br />
          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </p>
          <br />
          <p>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>
          <br />
          <p>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
        </ConfirmText>
      </FormCard>
      <Button
        onClick={() => (window.location.href = '/')}
        title="Concluir Comprar"
        type="button"
      >
        Concluir
      </Button>
      <Button
        onClick={() => dispatch(prevStep())}
        title="Cliqe aqui para Voltar"
        type="button"
      >
        Voltar para a edição de endereço
      </Button>
    </>
  )
}

export default Confirm
