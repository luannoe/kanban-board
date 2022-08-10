import styled from '@emotion/styled'
import { css } from '@emotion/react'

interface IContentProps {
  $isDraggingOver: boolean
  $isDraggingFrom: boolean
}

const Root = styled.section(
  ({ theme }) => css`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing[2]}px;
    min-width: 300px;

    header {
      display: flex;
      gap: ${theme.spacing[4]}px;
      padding: ${theme.spacing[2]}px ${theme.spacing[3]}px;

      > div {
        flex: 1;
        display: flex;
        gap: ${theme.spacing[4]}px;

        h3 {
          font-weight: 600;
          text-transform: uppercase;
        }

        span {
          color: ${theme.palette.neutral[300]};
        }
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${theme.palette.neutral[300]};
        color: ${theme.palette.neutral[50]};
        height: 24px;
        width: 24px;
        border-radius: 24px;
      }
    }
  `,
)

export const Content = styled.div<IContentProps>(
  ({ theme, $isDraggingOver, $isDraggingFrom }) => css`
    border-radius: ${theme.borderRadius.primary}px;
    overflow-y: auto;
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: ${theme.spacing[3]}px;
    min-height: calc(100vh - 226px);
    max-height: calc(100vh - 226px);
    overflow-x: hidden;
    background: ${theme.palette.neutral[100]};
    border: 2px dashed
      ${!$isDraggingFrom && $isDraggingOver
        ? theme.palette.neutral[300]
        : theme.palette.neutral[100]};
    transition: border-color 0.3s, background-color 0.3s;
  `,
)

export default Root
