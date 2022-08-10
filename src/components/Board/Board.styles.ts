import styled from '@emotion/styled'
import { css } from '@emotion/react'

const Root = styled.div(
  ({ theme }) => css`
    display: flex;
    gap: ${theme.spacing[7]}px;
    padding: ${theme.spacing[5]}px;
    overflow-x: auto;
  `,
)

export default Root
