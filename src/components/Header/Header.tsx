import React from 'react'

// Components
import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { ModalCard } from '@components/ModalCard'

// Hooks
import { useCards } from '@providers/cards/cards.hook'

// Styles
import Root from './Header.styles'

const Header = () => {
  const { search, setSearch } = useCards()

  const [open, setOpen] = React.useState(false)

  return (
    <>
      <Root>
        <img
          src="https://lc-public-assets.s3.sa-east-1.amazonaws.com/images/Header/letsCodeLogo.svg"
          alt="Let's Code Logo"
        />

        <div className="actions-wrapper">
          <Input
            placeholder="Buscar"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />

          <Button onClick={() => setOpen(true)}>Nova tarefa</Button>
        </div>
      </Root>

      <ModalCard open={open} column="To Do" onClose={() => setOpen(false)} />
    </>
  )
}

export default Header
