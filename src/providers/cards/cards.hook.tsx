import React from 'react'

// Interfaces
import { ICardsContext } from './cards.model'

// Context
import { CardsContext } from './cards.provider'

export const useCards = (): ICardsContext => {
  const context = React.useContext(CardsContext)

  if (!context) {
    throw new Error('useCards must be used within a CardsProvider')
  }

  return context
}
