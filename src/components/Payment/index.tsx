import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { useFormik } from 'formik'

import Button from '../Button'
import FormCard from '../FormCard'

import { RootReducer } from '../../store'
import { nextStep, prevStep, setOrderId } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'
import { usePurchaseMutation } from '../../services/api'
import * as S from './styles'

const Payment = () => {
  const dispatch = useDispatch()

  // Pegar os itens do carrinho no Redux
  const { items } = useSelector((state: RootReducer) => state.cart)

  // Hook para enviar dados para a API
  const [purchase, { isLoading, isError, data }] = usePurchaseMutation()

  // Pega os dados de entrega do estado Global
  const deliveryData = useSelector(
    (state: RootReducer) => state.cart.deliveryData
  )

  // Calculando o total do carrinho
  const getTotalPrice = () => {
    return items.reduce(
      (acumulador, valorAtual) => acumulador + valorAtual.preco,
      0
    )
  }

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  const form = useFormik({
    initialValues: {
      name: '',
      cardNumber: '',
      cvv: '',
      monthExpiration: '',
      expirationYear: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo  é obrigatorio'),
      cardNumber: Yup.string()
        .min(16, 'O numero ter 16 caracteres')
        .max(16, 'O numero ter 16 caracteres')
        .required('O campo  é obrigatorio'),
      cvv: Yup.string()
        .min(3, 'invalido')
        .max(3, 'invalido')
        .required('O campo  é obrigatorio'),
      monthExpiration: Yup.string()
        .min(2, 'invalido')
        .max(2, 'invalido')
        .required('O campo  é obrigatorio'),
      expirationYear: Yup.string()
        .min(4, 'invalido')
        .max(4, 'invalido')
        .required('O campo  é obrigatorio')
    }),
    validateOnMount: false,
    onSubmit: (values) => {
      //Combinar os dados de entrega e pagamento
      const paymentData = {
        products: items.map((item) => ({
          id: item.id, // Apenas id e price
          price: item.preco
        })),
        delivery: deliveryData,
        payment: {
          card: {
            name: values.name,
            number: values.cardNumber,
            code: Number(values.cvv),
            expires: {
              month: Number(values.monthExpiration),
              year: Number(values.expirationYear)
            }
          }
        }
      }
      // Envia para a API
      purchase(paymentData)
        .unwrap()
        .then((response) => {
          dispatch(setOrderId(response.orderId)) // Salva o orderId no Redux
          dispatch(nextStep()) // Avança para a etapa de confirmação
        })
        .catch((error) => {
          console.error('Erro ao processar pagamento:', error)
        })
    }
  })

  console.log(form)

  return (
    <>
      <FormCard
        title={`Pagamento - Valor a pagar de ${parseToBrl(getTotalPrice())}`}
      >
        <form onSubmit={form.handleSubmit}>
          <S.InputGroup>
            <label htmlFor="name">Nome no cartão</label>
            <input
              id="name"
              type="text"
              required
              name="name"
              value={form.values.name}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('name', form.errors.name)}</small>
          </S.InputGroup>
          <S.Row>
            <S.InputGroup maxWidth="80%">
              <label htmlFor="cardNumber">Número do cartão</label>
              <input
                id="cardNumber"
                type="text"
                required
                name="cardNumber"
                value={form.values.cardNumber}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage('cardNumber', form.errors.cardNumber)}
              </small>
            </S.InputGroup>
            <S.InputGroup maxWidth="20%">
              <label htmlFor="cvv">CVV</label>
              <input
                id="cvv"
                type="text"
                required
                name="cvv"
                value={form.values.cvv}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('cvv', form.errors.cvv)}</small>
            </S.InputGroup>
          </S.Row>
          <S.Row>
            <S.InputGroup>
              <label htmlFor="monthExpiration">Mês do vencimento</label>
              <input
                id="monthExpiration"
                type="text"
                required
                name="monthExpiration"
                value={form.values.monthExpiration}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage(
                  'monthExpiration',
                  form.errors.monthExpiration
                )}
              </small>
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="expirationYear">Ano de vencimento</label>
              <input
                id="expirationYear"
                type="text"
                required
                name="expirationYear"
                value={form.values.expirationYear}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage('expirationYear', form.errors.expirationYear)}
              </small>
            </S.InputGroup>
          </S.Row>
          <S.ButtomContainer>
            <Button
              onClick={() => {
                form.setTouched({
                  name: true,
                  cardNumber: true,
                  cvv: true,
                  monthExpiration: true,
                  expirationYear: true
                })
                form.submitForm()
              }}
              title="Cliqe aqui para Comprar"
              type="button"
              disabled={!form.isValid || !form.dirty}
            >
              Finalizar pagamento
            </Button>
            {Object.keys(form.errors).length > 0 && (
              <small>
                O formulário deve ser preenchido corretamente antes de
                continuar!
              </small>
            )}
            <Button
              onClick={() => dispatch(prevStep())}
              title="Cliqe aqui para Voltar"
              type="button"
            >
              Voltar para a edição de endereço
            </Button>
          </S.ButtomContainer>
        </form>
      </FormCard>
    </>
  )
}

export default Payment
