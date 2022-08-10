import React from 'react'

// Hooks
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect'

type DOMType = Pick<Window, 'addEventListener' | 'removeEventListener'>

function useEventListener<K extends keyof WindowEventMap>(
  eventName: K,
  handler: (event: WindowEventMap[K]) => void,
): void

function useEventListener<
  K extends keyof HTMLElementEventMap,
  T extends HTMLElement = HTMLDivElement,
>(
  eventName: K,
  handler: (event: HTMLElementEventMap[K]) => void,
  element: React.RefObject<T>,
): void

function useEventListener<
  KW extends keyof WindowEventMap,
  KH extends keyof HTMLElementEventMap,
  T extends DOMType,
>(
  eventName: KW | KH,
  handler: (
    event: WindowEventMap[KW] | HTMLElementEventMap[KH] | Event,
  ) => void,
  element?: React.RefObject<DOMType>,
) {
  const savedHandler = React.useRef(handler)

  useIsomorphicLayoutEffect(() => {
    savedHandler.current = handler
  }, [handler])

  React.useEffect(() => {
    const targetElement = (element?.current || window) as T
    if (!(targetElement && targetElement.addEventListener)) {
      return
    }

    const eventListener: typeof handler = event => savedHandler.current(event)

    targetElement.addEventListener(eventName, eventListener)

    return () => {
      targetElement.removeEventListener(eventName, eventListener)
    }
  }, [eventName, element])
}

export default useEventListener
