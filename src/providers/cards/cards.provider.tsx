import React from 'react'
import CardsAPI from '@services/cards'

// Interfaces
import { ICardResponse, ICardsContext, ICardProviderProps } from './cards.model'

// Utils
import { clearString } from 'utils/clearString'

export const CardsContext = React.createContext<ICardsContext>(
  {} as ICardsContext,
)

export const CardsProvider: React.FC<ICardProviderProps> = ({ children }) => {
  const [initialCards, setCards] = React.useState<ICardResponse[]>([])
  const [search, setSearch] = React.useState('')

  const cards = React.useMemo(() => {
    if (search) {
      return initialCards.filter(card =>
        clearString(card.titulo).includes(clearString(search)),
      )
    }

    return initialCards
  }, [initialCards, search])

  React.useEffect(() => {
    const getCards = async () => {
      const response = await CardsAPI.list()
      setCards(response)
    }

    getCards()
  }, [])

  return (
    <CardsContext.Provider value={{ cards, setCards, search, setSearch }}>
      {children}
    </CardsContext.Provider>
  )
}
