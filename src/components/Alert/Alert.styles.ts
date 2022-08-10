import styled from '@emotion/styled'
import { css, Theme } from '@emotion/react'
import { IAlert, Variant } from './Alert.props'

const getColor = (theme: Theme, variant: Variant) => {
  const hash = {
    primary: {
      background: theme.palette.primary.main,
      color: theme.palette.neutral[50],
    },
    error: {
      background: theme.palette.status.error.main,
      color: theme.palette.neutral[50],
    },
    success: {
      background: theme.palette.status.success.main,
      color: theme.palette.neutral[50],
    },
    warning: {
      background: theme.palette.status.warning.main,
      color: theme.palette.neutral[500],
    },
  }

  return hash[variant]
}

const Root = styled.div<Partial<IAlert>>(
  ({ theme, variant = 'primary' }) => css`
    position: relative;
    min-width: 320px;
    max-width: 500px;
    border-radius: ${theme.borderRadius.primary}px;
    box-shadow: ${theme.shadow[100]};
    overflow: hidden;
    background: ${getColor(theme, variant).background};
    color: ${getColor(theme, variant).color};

    .wrapper {
      padding: ${theme.spacing[3]}px;
      display: flex;
      align-items: flex-start;

      .content-wrapper {
        span {
          color: ${getColor(theme, variant).color};
        }
      }

      > div {
        flex: 1;
        display: flex;
        flex-direction: column;

        * + * {
          margin-top: ${theme.spacing[1]}px;
        }
      }

      button {
        cursor: pointer;
        margin-left: ${theme.spacing[3]}px;
        height: 24px;
        width: 24px;
      }
    }

    .counter {
      position: absolute;
      inset: auto 0 0;
      background: rgba(0, 0, 0, 0.1);
      height: 4px;
      transform-origin: 0 0;
    }
  `,
)

export default Root
