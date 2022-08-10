import React from 'react'
import dynamic from 'next/dynamic'

// Components
import ReactMarkdown from 'react-markdown'
import { Button } from '@components/Button'
import { ColumnSelect } from '@components/ColumnSelect'
import { Input } from '@components/Input'
import { Modal } from '@components/Modal'
import { Typography } from '@components/Typography'
import { ModalDelete } from '@components/ModalDelete'

// Services
import CardsAPI from '@services/cards'

// Interfaces
import { IModalCard } from './ModalCard.props'

// Hooks
import { useCards } from '@providers/cards/cards.hook'
import { useNotification } from 'hooks'

// High Order Component
import withModal from '@components/Modal/withModal'

// Styles
import Root from './ModalCard.styles'
import 'easymde/dist/easymde.min.css'
import { IColumnType } from '@components/Column/Column.props'

const SimpleMDE = dynamic(() => import('react-simplemde-editor'), {
  ssr: false,
})

const ModalCard: React.FC<IModalCard> = ({
  description: defaultDescription,
  id,
  column,
  open,
  title,
  onClose,
}) => {
  const { addNotification } = useNotification()
  const { setCards } = useCards()

  const titleRef = React.useRef<HTMLInputElement>(null)

  const [editMode, setEditMode] = React.useState(!id)
  const [description, setDescription] = React.useState(defaultDescription)
  const [deleteModal, setDeleteModal] = React.useState(false)
  const [selectedColumn, setSelectedColumn] =
    React.useState<IColumnType>(column)

  const [error, setError] = React.useState({
    title: false,
    description: false,
  })

  const handleSubmit = React.useCallback(async () => {
    const data = {
      titulo: titleRef.current?.value || '',
      conteudo: description || '',
      lista: selectedColumn,
    }

    const errors = {
      title: data.titulo === '',
      description: data.conteudo === '',
    }

    const hasError = Object.values(errors).includes(true)

    if (hasError) {
      setError(errors)
      return
    }

    try {
      const response = id
        ? await CardsAPI.update(data, id)
        : await CardsAPI.create(data)

      if (id) {
        setCards(cards => cards.map(card => (card.id === id ? response : card)))
      } else {
        setCards(cards => [...cards, response])
      }

      addNotification({
        variant: 'success',
        title: `Card ${id ? 'atualizado' : 'adicionado'}!`,
        description: 'O board foi atualizado com sucesso.',
      })

      onClose()
    } catch (error) {
      addNotification({
        variant: 'error',
        title: 'Oops!',
        description:
          'Tivemos um problema ao adicionar o card. Por favor, tente novamente!',
      })
    }
  }, [selectedColumn, description])

  return (
    <Modal open={open} onClose={onClose}>
      <Root>
        <header>
          <Typography variant="h5" tag="h2">
            {id ? 'Editar' : 'Criar'} item
          </Typography>

          {column && (
            <ColumnSelect
              value={selectedColumn}
              onChange={(value: IColumnType) => setSelectedColumn(value)}
            />
          )}
        </header>

        <div className="content-wrapper">
          <Input
            autoFocus
            fullWidth
            label="Título"
            ref={titleRef}
            defaultValue={title || ''}
            error={error.title}
            helperText={error.title ? 'Campo obrigatório' : ''}
            onBlur={e => setError({ ...error, title: e.target.value === '' })}
          />

          {editMode ? (
            <SimpleMDE value={description} onChange={setDescription} />
          ) : (
            <div className="view-mode" onClick={() => setEditMode(true)}>
              <Typography variant="caption">Descrição</Typography>

              <div>
                <ReactMarkdown>{description || ''}</ReactMarkdown>
              </div>
            </div>
          )}
        </div>

        <footer>
          {id && (
            <Button variant="tertiary" onClick={() => setDeleteModal(true)}>
              Excluir
            </Button>
          )}

          <div className="actions-wrapper">
            <Button variant="tertiary" onClick={onClose}>
              Cancelar
            </Button>
            <Button onClick={handleSubmit}>{id ? 'Editar' : 'Criar'}</Button>
          </div>
        </footer>
      </Root>

      <ModalDelete
        id={id}
        open={deleteModal}
        onClose={() => setDeleteModal(false)}
      />
    </Modal>
  )
}

export default withModal(ModalCard)
