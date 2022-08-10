import { ICardResponse } from '@providers/cards/cards.model'

export type IColumnType = 'To Do' | 'Doing' | 'Done'

export interface IColumn {
  title: string
  cards: ICardResponse[]
}
