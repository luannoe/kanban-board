import React from 'react'

export interface ICardPayload {
  titulo: string
  conteudo: string
  lista: string
}

export interface ICardResponse extends ICardPayload {
  id: string
}

export interface ICardsContext {
  cards: ICardResponse[]
  setCards: React.Dispatch<React.SetStateAction<ICardResponse[]>>
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

export interface ICardProviderProps {
  children: React.ReactNode
}
