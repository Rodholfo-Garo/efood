import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'

import Button from '../Button'
import FormCard from '../FormCard'
import { nextStep, prevStep, saveDeliveryData } from '../../store/reducers/cart'
import { usePurchaseMutation } from '../../services/api'

import * as S from './styles'

const Delivery = () => {
  const dispatch = useDispatch()

  // Hook da API para realizar a compra
  const [purchase, { isLoading, isError, data }] = usePurchaseMutation()

  // Configuração do Formik para gerenciar o formulário
  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      cep: '',
      houseNumber: '',
      complement: ''
    },

    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O Campo é Obrigatório'),
      address: Yup.string()
        .min(5, 'O precisa ter pelo menos 5 caracteres')
        .required('O Campo é Obrigatório'),
      city: Yup.string()
        .min(5, 'O precisa ter pelo menos 5 caracteres')
        .required('O Campo é Obrigatório'),
      cep: Yup.string()
        .min(8, 'O precisa ter pelo menos 8 caracteres')
        .max(8, 'O precisa ter pelo menos 8 caracteres')
        .required('O Campo é Obrigatório'),
      houseNumber: Yup.string()
        .min(1, 'O precisa ter pelo menos 1 caracteres')
        .required('O Campo é Obrigatório')
    }),
    // Valida o formulario quando a pagina for carregada
    validateOnMount: false,
    onSubmit: (values) => {
      // Estrutura de dados para enviar à API e ao Redux
      const deliveryData = {
        receiver: values.fullName,
        address: {
          description: values.address,
          city: values.city,
          zipCode: values.cep,
          number: Number(values.houseNumber),
          complement: values.complement
        }
      }

      // Envia os dados para a API
      purchase({ delivery: deliveryData })

      // Armazena os dados no Redux
      dispatch(saveDeliveryData(deliveryData))

      // Avança para a próxima etapa do checkout
      dispatch(nextStep())
    }
  })

  console.log(form)

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  return (
    <FormCard title="Entrega">
      {/* handleSubmit é um método do Formik */}
      <form onSubmit={form.handleSubmit}>
        <S.InputGroup>
          <label htmlFor="fullName">Quem irá receber</label>
          <input
            id="fullName"
            type="text"
            required
            name="fullName"
            // valor atual de um campo
            value={form.values.fullName}
            // Atualiza o valor no estado do Formik
            onChange={form.handleChange}
            // Marca o campo como tocado e dispara a validação
            onBlur={form.handleBlur}
          />
          <small>{getErrorMessage('fullName', form.errors.fullName)}</small>
        </S.InputGroup>

        <S.InputGroup>
          <label htmlFor="address">Endereço</label>
          <input
            id="address"
            type="text"
            required
            name="address"
            value={form.values.address}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <small>{getErrorMessage('address', form.errors.address)}</small>
        </S.InputGroup>

        <S.InputGroup>
          <label htmlFor="city">Cidade</label>
          <input
            id="city"
            type="text"
            required
            name="city"
            value={form.values.city}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <small>{getErrorMessage('city', form.errors.city)}</small>
        </S.InputGroup>

        <S.Row>
          <S.InputGroup>
            <label htmlFor="cep">CEP</label>
            <input
              id="cep"
              type="text"
              required
              name="cep"
              value={form.values.cep}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('cep', form.errors.cep)}</small>
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="houseNumber">Número</label>
            <input
              id="houseNumber"
              type="text"
              required
              name="houseNumber"
              value={form.values.houseNumber}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>
              {getErrorMessage('houseNumber', form.errors.houseNumber)}
            </small>
          </S.InputGroup>
        </S.Row>

        <S.InputGroup>
          <label htmlFor="complement">Complemento (opcional)</label>
          <textarea
            id="complement"
            rows={3}
            placeholder="Ex: Casa amarela, portão azul"
            name="complement"
            value={form.values.complement}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
        </S.InputGroup>

        <S.ButtomContainer>
          <Button
            onClick={() => {
              // Faz a validação dos campos ao clicar no botão
              form.setTouched({
                fullName: true,
                address: true,
                city: true,
                cep: true,
                houseNumber: true
              })
              form.submitForm() // Submete o formulário
            }}
            title="Cliqe aqui para Comprar"
            type="button"
            disabled={!form.isValid || !form.dirty} // Desabilita se não estiver válido ou se não houver alterações
          >
            Continuar com o pagamento
          </Button>

          {Object.keys(form.errors).length > 0 && (
            <small>
              O formulário deve ser preenchido corretamente antes de continuar!
            </small>
          )}

          <Button
            onClick={() => dispatch(prevStep())}
            title="Cliqe aqui para Voltar"
            type="button"
          >
            Voltar para o carrinho
          </Button>
        </S.ButtomContainer>
      </form>
    </FormCard>
  )
}

export default Delivery
