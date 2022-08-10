import React from 'react'

const useHover = (elementRef: React.RefObject<HTMLElement>): boolean => {
  const [value, setValue] = React.useState<boolean>(false)

  const handleMouseEnter = () => setValue(true)
  const handleMouseLeave = () => setValue(false)

  React.useEffect(() => {
    const element = elementRef?.current

    if (element) {
      element.addEventListener('mouseenter', handleMouseEnter)
      element.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        element.removeEventListener('mouseenter', handleMouseEnter)
        element.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [elementRef])

  return value
}

export default useHover
