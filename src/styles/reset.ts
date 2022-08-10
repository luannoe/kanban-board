import { css } from '@emotion/react'

const reset = css`
  /***
    The new CSS reset - version 1.5.1 (last updated 1.3.2022)
    GitHub page: https://github.com/elad2412/the-new-css-reset
  ***/

  /*
    Remove all the styles of the "User-Agent-Stylesheet", except for the 'display' property
    - The "symbol *" part is to solve Firefox SVG sprite bug
  */
  *:where(:not(iframe, canvas, img, svg, video, ul, li):not(svg *, symbol *)) {
    all: unset;
    display: revert;
  }

  /* Preferred box-sizing value */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    font-family: 'Poppins', sans-serif;
  }

  strong {
    font-weight: 600;
  }

  /* Reapply the pointer cursor for anchor tags */
  a,
  button {
    cursor: revert;
  }

  /* For images to not be able to exceed their container */
  img {
    max-width: 100%;
  }

  /* removes spacing between cells in tables */
  table {
    border-collapse: collapse;
  }

  /* revert the 'white-space' property for textarea elements on Safari */
  textarea {
    white-space: revert;
  }

  /* minimum style to allow to style meter element */
  meter {
    -webkit-appearance: revert;
    appearance: revert;
  }

  code {
    line-height: 1;
    margin: 0 2px;
    padding: 3px 5px;
    white-space: nowrap;
    border-radius: 3px;
    font-size: 14px;
    border: 1px solid #eeeeee;
    color: rgba(51, 51, 51, 0.9);
    background-color: #f8f8f8;
  }

  blockquote {
    position: relative;
    padding-left: 20px;

    &:before {
      content: ' ';
      position: absolute;
      height: 100%;
      width: 3px;
      background: rgba(0, 0, 0, 0.1);
      left: 0%;
    }
  }

  /* reset default text opacity of input placeholder */
  ::placeholder {
    color: unset;
  }

  /* fix the feature of 'hidden' attribute.
    display:revert; revert to element instead of attribute */
  :where([hidden]) {
    display: none;
  }

  /* revert for bug in Chromium browsers
    - fix for the content editable attribute will work properly. */
  :where([contenteditable]) {
    -moz-user-modify: read-write;
    -webkit-user-modify: read-write;
    overflow-wrap: break-word;
    line-break: after-white-space;
  }

  /* apply back the draggable feature - exist only in Chromium and Safari */
  :where([draggable='true']) {
    -webkit-user-drag: element;
  }
`

export default reset
