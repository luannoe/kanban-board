import { css } from '@emotion/react'
import styled from '@emotion/styled'

const Root = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing[5]}px;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .content-wrapper {
      display: flex;
      flex-direction: column;
      gap: ${theme.spacing[4]}px;
    }

    .view-mode {
      cursor: pointer;
      margin-top: ${theme.spacing[3]}px;

      > p {
        display: block;
        margin-bottom: ${theme.spacing[3]}px;
      }

      > div {
        padding: ${theme.spacing[2]}px ${theme.spacing[3]}px;
        border-radius: ${theme.borderRadius.primary}px;
        transition: background-color 0.3s;

        &:hover {
          background-color: ${theme.palette.neutral[100]};
        }
      }
    }

    footer {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .actions-wrapper {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        gap: ${theme.spacing[3]}px;
      }
    }
  `,
)

export default Root
