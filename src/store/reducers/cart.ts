import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Cardapio } from '../../pages/Home'

// 1ª - Definimos o tipo do estado global do carrinho
type CartState = {
  items: Cardapio[] // Lista de produtos no carrinho
  isOpen: boolean // Define se o carrinho está aberto ou fechado
  checkout: 'cart' | 'delivery' | 'payment' | 'confirm' //Define o fluxo do checkout(tipo de dado union type do ts)
  // Dados de entrega preenchidos pelo usuário
  deliveryData: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
}

// O estado inicial serve para configurar os valores padrão antes de o usuário interagir com o sistema.
// 2ª - Estado inicial do carrinho
const initialState: CartState = {
  items: [],
  isOpen: false,
  checkout: 'cart', // Começa na etapa do carrinho
  // Guarda os dados de entrega preenchidos no componente Delivery
  deliveryData: {
    receiver: '',
    address: {
      description: '',
      city: '',
      zipCode: '',
      number: 0,
      complement: ''
    }
  }
}

// 3ª - Criamos um Slice do Redux para gerenciar o estado do carrinho
// createSlice, ele cria automaticamente as actions para cada reducer definido.
const cartSlice = createSlice({
  name: 'cart', // Nome do slice
  initialState, // Estado inicial definido antes

  // Funções que atualizam o estado global
  reducers: {
    saveDeliveryData: (state, action) => {
      state.deliveryData = action.payload // Salva os dados de entrega no estado
    },
    add: (state, action: PayloadAction<Cardapio>) => {
      state.items.push(action.payload) // Adiciona um item ao carrinho
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload) // Remove um item do carrinho
    },
    open: (state) => {
      state.isOpen = true // Abre o carrinho
    },
    close: (state) => {
      state.isOpen = false // Fecha o carrinho
    },
    nextStep: (state) => {
      if (state.checkout === 'cart') state.checkout = 'delivery'
      else if (state.checkout === 'delivery') state.checkout = 'payment'
      else if (state.checkout === 'payment') state.checkout = 'confirm'
    },
    prevStep: (state) => {
      if (state.checkout === 'confirm') state.checkout = 'payment'
      else if (state.checkout === 'payment') state.checkout = 'delivery'
      else if (state.checkout === 'delivery') state.checkout = 'cart'
    }
  }
})

// 4ª - Exportamos as ações para serem usadas em outros componentes
export const {
  add,
  open,
  close,
  remove,
  nextStep,
  prevStep,
  saveDeliveryData
} = cartSlice.actions
export default cartSlice.reducer
