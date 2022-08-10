import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { animated } from 'react-spring'

export const Wrapper = styled.div(
  ({ theme }) => css`
    position: fixed;
    inset: 0;
    z-index: ${theme.zIndex.modal};
    display: flex;
    align-items: center;
    justify-content: center;
  `,
)

export const Overlay = styled(animated.span)(css`
  position: absolute;
  inset: 0;
  z-index: -1;
  background-color: rgba(0, 0, 0, 0.6);
`)

export const Content = styled(animated.div, {
  shouldForwardProp: (propName: string) => !propName.startsWith('$'),
})<{ $maxWidth: string }>(
  ({ theme, $maxWidth }) => css`
    padding: ${theme.spacing[4]}px ${theme.spacing[5]}px;
    width: ${$maxWidth};
    max-width: calc(100vw - ${theme.spacing[5]}px);
    max-height: calc(100vh - ${theme.spacing[5]}px);
    overflow-y: auto;
    background: ${theme.palette.neutral[50]};
    border-radius: ${theme.borderRadius.primary}px;

    .button-icon {
      color: ${theme.palette.neutral[500]};
    }
  `,
)
