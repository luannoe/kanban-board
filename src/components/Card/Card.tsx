import React from 'react'

// Components
import ReactMarkdown from 'react-markdown'
import { Draggable } from 'react-beautiful-dnd'
import { ModalCard } from '@components/ModalCard'
import { Typography } from '@components/Typography'

// Interfaces
import { ICard } from './Card.props'

// Styles
import Root from './Card.styles'

const Card: React.FC<ICard> = ({ column, description, index, id, title }) => {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <Draggable draggableId={id} index={index}>
        {(dragProvided, dragSnapshot) => (
          <Root
            ref={dragProvided.innerRef}
            onClick={() => setOpen(true)}
            {...dragProvided.draggableProps}
            {...dragProvided.dragHandleProps}
          >
            <Typography variant="body" tag="h4">
              {title}
            </Typography>

            <ReactMarkdown>{description}</ReactMarkdown>
          </Root>
        )}
      </Draggable>

      <ModalCard
        open={open}
        id={id}
        column={column}
        title={title}
        description={description}
        onClose={() => setOpen(false)}
      />
    </>
  )
}

export default Card
