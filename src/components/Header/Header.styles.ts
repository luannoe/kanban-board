import styled from '@emotion/styled'
import { css } from '@emotion/react'

const Root = styled.header(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${theme.spacing[6]}px;
    background: ${theme.palette.neutral[50]};
    padding: ${theme.spacing[4]}px ${theme.spacing[5]}px;
    box-shadow: ${theme.shadow[200]};

    img {
      display: none;

      @media (min-width: ${theme.breakpoints.md}px) {
        display: block;
      }
    }

    .actions-wrapper {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: ${theme.spacing[6]}px;

      @media (min-width: ${theme.breakpoints.md}px) {
        flex: unset;
      }

      > div {
        display: none;

        @media (min-width: ${theme.breakpoints.md}px) {
          display: block;
        }
      }

      button {
        width: 100%;

        @media (min-width: ${theme.breakpoints.md}px) {
          width: unset;
        }
      }
    }
  `,
)

export default Root
