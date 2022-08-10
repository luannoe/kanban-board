import React from 'react'

// Hooks
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect'

type ReturnType = [boolean, (locked: boolean) => void]

const useLockedBody = (initialLocked = false): ReturnType => {
  const [locked, setLocked] = React.useState(initialLocked)

  useIsomorphicLayoutEffect(() => {
    if (!locked) {
      return
    }

    const originalOverflow = document.body.style.overflow
    const originalPaddingRight = document.body.style.paddingRight

    document.body.style.overflow = 'hidden'

    const root =
      document.getElementById('__next') || document.getElementById('root')
    const scrollBarWidth = root ? root.offsetWidth - root.scrollWidth : 0

    if (scrollBarWidth) {
      document.body.style.paddingRight = `${scrollBarWidth}px`
    }

    return () => {
      document.body.style.overflow = originalOverflow

      if (scrollBarWidth) {
        document.body.style.paddingRight = originalPaddingRight
      }
    }
  }, [locked])

  React.useEffect(() => {
    if (locked !== initialLocked) {
      setLocked(initialLocked)
    }
  }, [initialLocked]) // eslint-disable-line

  return [locked, setLocked]
}

export default useLockedBody
