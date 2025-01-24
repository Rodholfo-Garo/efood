import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Restaurantes } from '../pages/Home'

type Products = {
  id: number // Permite qualquer número, não apenas 1
  price: number
}

type PurchasePayload = {
  products?: Products[]
  delivery?: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  payment?: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<Restaurantes[], void>({
      query: () => 'restaurantes'
    }),
    // Query é ultilizado para recuperar dados do servidor!
    getPratos: builder.query<Restaurantes, string>({
      query: (id) => `restaurantes/${id}`
    }),
    // o metodo POST faz a integração da nossa tela com a API
    // O post serve para inserir novos dados na API
    // mutation serve para atualizar ou enviar novos dados ao servidor(mudança)
    // any representa a resposta da API, PurchasePayload é o que vamos enviar para a api
    purchase: builder.mutation<any, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        // Como a propriedade tem o mesmo nome do valor não precisamos passar o valor para a propriedade
        body
      })
    })
  })
})

// Esta função faz a requisição
export const {
  useGetRestaurantesQuery,
  useGetPratosQuery,
  usePurchaseMutation
} = api

export default api
