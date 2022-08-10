import React from 'react'

// Hooks
import useIsFirstRender from './useIsFirstRender'

const useUpdateEffect = (
  effect: React.EffectCallback,
  deps?: React.DependencyList,
) => {
  const isFirst = useIsFirstRender()

  React.useEffect(() => {
    if (!isFirst) {
      return effect()
    }
  }, [deps])
}

export default useUpdateEffect
