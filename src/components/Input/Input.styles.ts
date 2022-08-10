import styled from '@emotion/styled'
import { css } from '@emotion/react'

type RootProps = {
  $disabled?: boolean
  $error?: boolean
  $fullWidth?: boolean
  $icon?: boolean
  $type?: string
}

const Root = styled.div<RootProps>(
  ({ theme, $disabled, $error, $fullWidth, $icon, $type }) => css`
    display: ${$type === 'hidden' ? 'none' : 'block'};
    width: ${$fullWidth ? '100%' : '25ch'};

    label {
      display: block;
      margin-bottom: 7px;
      color: ${$disabled
        ? theme.palette.neutral[300]
        : theme.palette.neutral[500]};
      ${theme.typography.caption};
    }

    div.input-wrapper {
      position: relative;

      &:hover {
        & > input {
          border-bottom-color: ${$error
            ? theme.palette.status.error
            : theme.palette.primary.main};

          &:disabled {
            border-bottom-color: ${theme.palette.neutral[200]};
          }
        }
      }

      & > i {
        cursor: pointer;
        appearance: none;
        position: absolute;
        top: -2px;
        right: 0;
        font-size: 20px;
      }
    }

    input {
      background: transparent;
      border: 0;
      border-bottom: 2px solid
        ${$error ? theme.palette.status.error.main : theme.palette.neutral[200]};
      padding-bottom: ${theme.spacing[1]}px;
      padding-right: ${$icon ? 36 : 0}px;
      width: 100%;
      height: 30px;
      color: ${$error
        ? theme.palette.status.error.main
        : theme.palette.neutral[500]};
      ${theme.typography.body3};
      transition: border-color 0.3s, color 0.3s;

      ::placeholder {
        color: ${theme.palette.neutral[300]};
      }

      &:focus {
        outline: 0;
        border-bottom-color: ${$error
          ? theme.palette.status.error.main
          : theme.palette.neutral[500]} !important;
      }

      &:disabled {
        cursor: not-allowed;
        border-bottom-color: ${theme.palette.neutral[200]};
        color: ${theme.palette.neutral[300]};
      }
    }

    span.helper-text {
      display: block;
      margin-top: ${theme.spacing[1]}px;
      margin-bottom: 7px;
      color: ${$error
        ? theme.palette.status.error.main
        : theme.palette.neutral[300]};
      ${theme.typography.caption};
      transition: color 0.3s;
    }
  `,
)

export default Root
