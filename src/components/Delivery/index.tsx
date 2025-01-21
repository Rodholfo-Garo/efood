import { useDispatch } from 'react-redux'
import { nextStep, prevStep } from '../../store/reducers/cart'
import Button from '../Button'
import { InputGroup, Row, ButtomContainer } from './styles'
import FormCard from '../FormCard'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Delivery = () => {
  const dispatch = useDispatch()

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
      // Processa o envio e navega para a próxima etapa
      console.log(values)
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
        <InputGroup>
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
        </InputGroup>

        <InputGroup>
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
        </InputGroup>

        <InputGroup>
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
        </InputGroup>

        <Row>
          <InputGroup>
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
          </InputGroup>
          <InputGroup>
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
          </InputGroup>
        </Row>

        <InputGroup>
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
        </InputGroup>

        <ButtomContainer>
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
        </ButtomContainer>
      </form>
    </FormCard>
  )
}

export default Delivery
