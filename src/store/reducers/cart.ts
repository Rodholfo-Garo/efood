import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Cardapio } from '../../pages/Home'

// 1ª - Definimos o tipo do estado global do carrinho
type CartState = {
  items: Cardapio[]
  isOpen: boolean
  checkout: 'cart' | 'delivery' | 'payment' | 'confirm' //Define o fluxo do checkout(tipo de dado union type do ts)
}

// 2ª - Estado inicial do carrinho
const initialState: CartState = {
  items: [],
  isOpen: false,
  checkout: 'cart' // Começa na etapa do carrinho
}

// 3ª - Criamos um Slice do Redux para gerenciar o estado do carrinho
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  // Criando actions
  reducers: {
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
export const { add, open, close, remove, nextStep, prevStep } =
  cartSlice.actions
export default cartSlice.reducer
