import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurantes } from '../pages/Home'
import { number } from 'yup'

type Products = {
  id: 1
  price: 0
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
    getPratos: builder.query<Restaurantes, string>({
      query: (id) => `restaurantes/${id}`
    }),
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
