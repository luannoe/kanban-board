import api from './api'

// Interfaces
import { ICardPayload } from '@providers/cards/cards.model'

export const CardsAPI = {
  list: async () => {
    const response = await api.get('/cards')
    return response.data
  },

  create: async (payload: ICardPayload) => {
    const response = await api.post('/cards', payload)
    return response.data
  },

  update: async (payload: ICardPayload, id: string) => {
    const response = await api.put(`/cards/${id}`, { ...payload, id })
    return response.data
  },

  delete: async (id: string) => {
    const response = await api.delete(`/cards/${id}`)
    return response.data
  },
}

export default CardsAPI
