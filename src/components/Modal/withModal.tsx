import React from 'react'

export const MODAL_DELAY = 500

export function withModal<T = any>(WrappedComponent: React.ComponentType<T>) {
  return ({ open, ...rest }: any): any => {
    const interval = React.useRef<NodeJS.Timeout>()

    const [show, setShow] = React.useState<boolean>(open)

    const resetTimer = () => {
      if (interval.current) clearTimeout(interval.current)
    }

    React.useEffect(() => {
      if (!open) {
        interval.current = setTimeout(() => setShow(false), MODAL_DELAY)
      } else {
        resetTimer()
        setShow(true)
      }
      return resetTimer
    }, [open])

    return show ? <WrappedComponent open={open} {...rest} /> : null
  }
}

export default withModal
