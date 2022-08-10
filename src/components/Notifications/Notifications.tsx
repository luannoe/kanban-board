/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import ReactDOM from 'react-dom'
import { useTransition, animated } from 'react-spring'

// Components
import { Alert } from '@components/Alert'

// Styles
import Root from './Notifications.styles'

// Interfaces
import { INotifications } from './Notifications.props'

const Notifications: React.FC<INotifications> = ({
  notifications = [],
  position = 'bottom-end',
}) => {
  const [isSSR, setIsSSR] = React.useState(true)
  const [refMap] = React.useState(() => new WeakMap())
  const [cancelMap] = React.useState(() => new WeakMap())

  React.useEffect(() => {
    setIsSSR(false)
  }, [])

  const transition = useTransition(notifications, {
    from: {
      opacity: 0,
      height: 70,
      transform: `translateX(${
        position === 'top-start' || position === 'bottom-start' ? '-30%' : '30%'
      })`,
    },
    enter: ((item: HTMLDivElement) => async (next: any) =>
      next({
        opacity: 1,
        height: refMap.get(item).offsetHeight + 24,
        transform: 'translateX(0)',
      })) as any,
    leave: ((item: HTMLDivElement) => async (next: any, cancel: any) => {
      cancelMap.set(item, cancel)
      await next({
        opacity: 0,
        height: 0,
        transform: `translateX(${
          position === 'top-start' || position === 'bottom-start'
            ? '-30%'
            : '30%'
        })`,
      })
    }) as any,
  })

  return !isSSR
    ? ReactDOM.createPortal(
        <Root position={position}>
          {transition((style, item) => (
            <animated.div style={style}>
              <Alert
                {...item}
                duration={item.duration || 5000}
                ref={ref => ref && refMap.set(item, ref)}
              />
            </animated.div>
          ))}
        </Root>,
        window.document.body,
      )
    : null
}

Notifications.displayName = 'Notifications'

export default Notifications
