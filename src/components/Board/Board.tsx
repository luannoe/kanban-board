import React from 'react'

// Components
import { Column } from '@components/Column'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'

// Interfaces
import { IBoard } from './Board.props'
import { ICardResponse } from '@providers/cards/cards.model'

// Styles
import Root from './Board.styles'

// Utils
import { reorderCardMap } from './Board.utils'

// Services
import CardsAPI from '@services/cards'

// Hooks
import { useCards } from '@providers/cards/cards.hook'

const Board: React.FC<IBoard> = ({ columns: columnData }) => {
  const { cards } = useCards()
  const [columns, setColumns] = React.useState(columnData)

  React.useEffect(() => {
    setColumns(columnData)
  }, [columnData])

  const onDragEnd = async (result: DropResult) => {
    if (!result.destination) {
      return
    }

    const source = result.source
    const destination = result.destination

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return
    }

    try {
      const card = cards.find(
        card => card.id === result.draggableId,
      ) as ICardResponse

      const data = reorderCardMap({
        cardMap: columns,
        source,
        destination,
      })

      setColumns(data.cardMap)

      await CardsAPI.update(
        { ...card, lista: result.destination.droppableId },
        result.draggableId,
      )
    } catch (error) {}
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Root>
        {Object.keys(columns).map(key => (
          <Column key={key} title={key} cards={columns[key]} />
        ))}
      </Root>
    </DragDropContext>
  )
}

export default Board
