import React from 'react'

// Services
import CardsAPI from '@services/cards'

// High Order Components
import withModal from '@components/Modal/withModal'

// Components
import { Button } from '@components/Button'
import { Modal } from '@components/Modal'
import { Typography } from '@components/Typography'

// Intercaces
import { IModalDelete } from './ModalDelete.props'

// Hooks
import { useCards } from '@providers/cards/cards.hook'
import { useNotification } from 'hooks'

// Styles
import Root from './ModalDelete.styles'

const ModalDelete: React.FC<IModalDelete> = ({ id, open, onClose }) => {
  const { addNotification } = useNotification()
  const { setCards } = useCards()

  const handleDelete = React.useCallback(async () => {
    if (id) {
      try {
        const response = await CardsAPI.delete(id)
        setCards(response)

        addNotification({
          variant: 'success',
          title: `Card excluído!`,
          description: 'O board foi atualizado com sucesso.',
        })
      } catch (error) {
        addNotification({
          variant: 'error',
          title: 'Oops!',
          description:
            'Não foi possível excluir o card. Por favor, tente novamente!',
        })
      }
    }
  }, [])

  return (
    <Modal open={open} onClose={onClose} maxWidth="500px">
      <Root>
        <Typography variant="h5" tag="h2">
          Tem certeza que deseja excluir a tarefa?
        </Typography>

        <Typography>
          A exclusão não poderá ser desfeita. Clique no botão excluir, abaixo,
          caso você queira continuar.
        </Typography>

        <footer>
          <Button onClick={onClose}>Cancelar</Button>
          <Button onClick={handleDelete}>Excluir</Button>
        </footer>
      </Root>
    </Modal>
  )
}

export default withModal(ModalDelete)
