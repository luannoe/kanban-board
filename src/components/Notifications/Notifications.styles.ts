import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { INotifications } from './Notifications.props'

const Root = styled.div<Partial<INotifications>>(
  ({ theme, position = 'top-start' }) => css`
    position: fixed;
    z-index: ${theme.zIndex.notification};
    padding: ${theme.spacing[4]}px ${theme.spacing[4]}px 0;

    ${position === 'top-start' &&
    css`
      top: 0;
      left: 0;
    `}

    ${position === 'top-end' &&
    css`
      top: 0;
      right: 0;
    `}

		${position === 'bottom-start' &&
    css`
      bottom: 0;
      left: 0;
    `}

		${position === 'bottom-end' &&
    css`
      bottom: 0;
      right: 0;
    `}
  `,
)

export default Root
