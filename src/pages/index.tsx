import React from 'react'
import nookies from 'nookies'

// Hooks
import { useCards } from '@providers/cards/cards.hook'

// Data
import columns from 'data/consts/columns'

// Interfaces
import { GetServerSideProps, NextPage } from 'next'
import { ICardResponse } from '@providers/cards/cards.model'

// Components
import { Board } from '@components/Board'
import { Header } from '@components/Header'

// Providers
import { CardsProvider } from '@providers/cards/cards.provider'

const HomeProvider: NextPage = () => {
  return (
    <CardsProvider>
      <Home />
    </CardsProvider>
  )
}

const Home: React.FC = () => {
  const { cards } = useCards()
  const [isSSR, setIsSSR] = React.useState(true)

  React.useEffect(() => {
    setIsSSR(false)
  }, [])

  const columnCards = React.useMemo<{ [key: string]: ICardResponse[] }>(
    () =>
      columns.reduce((target: any, key) => {
        target[key] = cards.filter(card => card.lista === key)
        return target
      }, {}),
    [cards],
  )

  return (
    <>
      <Header />
      {isSSR ? null : <Board columns={columnCards} />}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { token } = nookies.get(context)

  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },
    }
  }

  return {
    props: {},
  }
}

export default HomeProvider
