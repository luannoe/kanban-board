import { ICardResponse } from '@providers/cards/cards.model'
import { IBoardColumn } from './Board.props'

interface IReorderCardMap {
  cardMap: IBoardColumn
  source: {
    index: number
    droppableId: string
  }
  destination: {
    index: number
    droppableId: string
  }
}

const reorder = (
  list: ICardResponse[],
  startIndex: number,
  endIndex: number,
) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

export const reorderCardMap = ({
  cardMap,
  source,
  destination,
}: IReorderCardMap) => {
  const current = [...cardMap[source.droppableId]]
  const next = [...cardMap[destination.droppableId]]
  const target = current[source.index]

  if (source.droppableId === destination.droppableId) {
    const reordered = reorder(current, source.index, destination.index)
    const result = {
      ...cardMap,
      [source.droppableId]: reordered,
    }
    return {
      cardMap: result,
    }
  }

  current.splice(source.index, 1)

  next.splice(destination.index, 0, target)

  const result = {
    ...cardMap,
    [source.droppableId]: current,
    [destination.droppableId]: next,
  }

  return {
    cardMap: result,
  }
}

export default reorder
