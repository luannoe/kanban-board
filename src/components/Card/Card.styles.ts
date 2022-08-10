import styled from '@emotion/styled'
import { css } from '@emotion/react'

const Root = styled.div(
  ({ theme }) => css`
    cursor: pointer;
    background: ${theme.palette.neutral[50]};
    padding: ${theme.spacing[3]}px ${theme.spacing[4]}px;
    border-radius: ${theme.borderRadius.primary}px;
    box-shadow: ${theme.shadow[100]};
    transition: box-shadow 0.2s;
    margin: ${theme.spacing[2]}px 0;

    &:hover {
      box-shadow: ${theme.shadow[300]};
    }

    h4 {
      font-weight: 600;
    }

    p {
      margin-top: ${theme.spacing[1]}px;
      color: ${theme.palette.neutral[400]};
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  `,
)

export default Root
