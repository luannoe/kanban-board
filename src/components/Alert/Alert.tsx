import React from 'react'
import { animated, useSpring } from 'react-spring'

// Components
import { Typography } from '@components/Typography'

// Hooks
import { useHover, useUpdateEffect } from '../../hooks'

// Interfaces
import { IAlert } from './Alert.props'

// Styles
import Root from './Alert.styles'

const Alert = React.forwardRef<HTMLDivElement, IAlert>(
  (
    {
      description,
      duration = 0,
      showClose = true,
      title,
      variant = 'primary',
      onClick,
      onClose,
    },
    ref,
  ) => {
    const wrapperRef = React.useRef<HTMLDivElement>(null)
    const isHover = useHover(wrapperRef)

    const [style, animation] = useSpring(
      () => ({
        config: { duration },
        transform: 'scaleX(100%)',
        onRest: onClose,
      }),
      [],
    )

    React.useEffect(() => {
      animation.start({
        to: { transform: 'scaleX(0%)' },
      })
    }, [])

    useUpdateEffect(() => {
      if (duration > 0) {
        if (isHover) {
          animation.pause()
        } else {
          animation.resume()
        }
      }
    }, [duration, isHover, animation])

    const handleOnClose = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()
      onClose && onClose(e)
    }

    return (
      <Root ref={ref} variant={variant} onClick={onClick ? onClick : () => {}}>
        <div ref={wrapperRef} className="wrapper">
          <div className="content-wrapper">
            {title && (
              <Typography bold variant="body2">
                {title}
              </Typography>
            )}

            <Typography variant="body3">{description}</Typography>
          </div>

          {showClose && <button onClick={handleOnClose}>x</button>}
        </div>

        {duration > 0 && <animated.span style={style} className="counter" />}
      </Root>
    )
  },
)

export default Alert
