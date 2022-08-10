import React from 'react'
import { v4 as uuid } from 'uuid'

// Components
import { Notifications } from '@components/Notifications'

// Interfaces
import { IAlert } from '@components/Alert/Alert.props'
import { INotifications } from '@components/Notifications/Notifications.props'

interface INotificationContext {
  notifications: IAlert[]
  addNotification(notification: Omit<IAlert, 'id'>): void
  removeNotification(id: string): void
}

interface INotificationProvider extends Omit<INotifications, 'notifications'> {
  children: React.ReactNode
}

const NotificationContext = React.createContext<INotificationContext>(
  {} as INotificationContext,
)

const NotificationProvider: React.FC<INotificationProvider> = ({
  children,
  position,
}) => {
  const [notifications, setNotifications] = React.useState<IAlert[]>([])

  const addNotification = React.useCallback(
    ({
      description,
      duration,
      showClose,
      title,
      variant,
      onClick,
      onClose,
    }: Omit<IAlert, 'id'>) => {
      const id = uuid()

      const handleOnClose = () => {
        onClose && onClose()
        setNotifications(prev => prev.filter(i => i.id !== id))
      }

      const notification = {
        description,
        duration,
        id,
        showClose,
        title,
        variant,
        onClick,
        onClose: handleOnClose,
      }

      setNotifications(prev => [...prev, notification])
    },
    [],
  )

  const removeNotification = React.useCallback((id: string) => {
    setNotifications(prev => prev.filter(message => message.id !== id))
  }, [])

  return (
    <NotificationContext.Provider
      value={{ notifications, addNotification, removeNotification }}
    >
      {children}
      <Notifications notifications={notifications} position={position} />
    </NotificationContext.Provider>
  )
}

function useNotification(): INotificationContext {
  const context = React.useContext(NotificationContext)

  if (!context) {
    throw new Error(
      'useNotification must be used within a NotificationProvider',
    )
  }

  return context
}

export { NotificationProvider, useNotification }
