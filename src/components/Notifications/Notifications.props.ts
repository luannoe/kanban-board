import { IAlert } from '../Alert/Alert.props'

export interface INotifications {
  notifications: IAlert[]
  position?: 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'
}
