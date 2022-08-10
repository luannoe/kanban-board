import { ICardResponse } from '@providers/cards/cards.model'

export interface IBoardColumn {
  [key: string]: ICardResponse[]
}

export interface IBoard {
  columns: IBoardColumn
}
