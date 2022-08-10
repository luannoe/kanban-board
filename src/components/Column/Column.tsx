import React from 'react'

// Components
import { Droppable } from 'react-beautiful-dnd'
import { Card } from '@components/Card'
import { ModalCard } from '@components/ModalCard'
import { Typography } from '@components/Typography'

// Interfaces
import { IColumn } from './Column.props'

// Styles
import Root, { Content } from './Column.styles'

const Column: React.FC<IColumn> = ({ cards, title }) => {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <Root>
        <header>
          <div>
            <Typography variant="body2" tag="h3">
              {title}
            </Typography>

            <Typography>{cards.length}</Typography>
          </div>
          <button onClick={() => setOpen(true)}>+</button>
        </header>

        <Droppable droppableId={title} type="CARD">
          {(dropProvided, dropSnapshot) => (
            <Content
              ref={dropProvided.innerRef}
              $isDraggingOver={dropSnapshot.isDraggingOver}
              $isDraggingFrom={Boolean(dropSnapshot.draggingFromThisWith)}
              {...dropProvided.droppableProps}
            >
              {cards.map((card, index) => (
                <Card
                  key={card.id}
                  index={index}
                  id={card.id}
                  title={card.titulo}
                  description={card.conteudo}
                  column={title}
                />
              ))}
              {dropProvided.placeholder}
            </Content>
          )}
        </Droppable>
      </Root>

      <ModalCard open={open} column={title} onClose={() => setOpen(false)} />
    </>
  )
}

export default Column
