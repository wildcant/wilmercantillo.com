import { Global } from '@emotion/react'
import React from 'react'

export const fonts = {
  heading: 'Josefin Sans',
  body: 'Sf Pro Display',
}
// TODO - Find a different place to store fonts
export const Fonts = () => (
  <Global
    styles={`
    /* Rouge Script */
    @font-face {
      font-family: "Rouge Script";
      font-weight: 400;
      font-style: normal;
      src: url("/fonts/Rouge_Script/400-Regular.ttf");
    }

    /* Fire Code */
    @font-face {
      font-family: "Fira Code";
      font-weight: 400;
      font-style: normal;
      src: url("/fonts/Fira_Code/400-Regular.ttf");
    }

    /* Sf Pro Display */
    @font-face {
      font-family: "Sf Pro Display";
      font-weight: 200;
      font-style: normal;
      src: url("/fonts/Sf_Pro_Display/200-ultralight.ttf");
    }
    @font-face {
      font-family: "Sf Pro Display";
      font-weight: 300;
      font-style: normal;
      src: url("/fonts/Sf_Pro_Display/300-light.ttf");
    }
    @font-face {
      font-family: "Sf Pro Display";
      font-weight: 400;
      font-style: normal;
      src: url("/fonts/Sf_Pro_Display/400-Regular.ttf");
    }
    @font-face {
      font-family: "Sf Pro Display";
      font-weight: 700;
      font-style: normal;
      src: url("/fonts/Sf_Pro_Display/700-bold.ttf");
    }
    
    /* Josefin Sans */
    @font-face {
      font-family: "Josefin Sans";
      font-weight: 400;
      font-style: normal;
      src: url("/fonts/Josefin_Sans/400-Regular.ttf");
    }
    @font-face {
      font-family: "Josefin Sans";
      font-weight: 400;
      font-style: italic;
      src: url("/fonts/Josefin_Sans/400-Italic.ttf");
    }

    /*
      This will hide the focus indicator if the element receives focus 
      via the mouse, but it will still show up on keyboard focus.
    */
    .js-focus-visible :focus:not([data-focus-visible-added]) {
      outline: none;
      box-shadow: none;
    }
    `}
  />
)

export const GeneralStyles = () => (
  <Global
    styles={`

    pre[class*='language-'] {
      overflow-x: auto;
    }
    .highlight-code-line {
      background-color: hsla(207, 95%, 15%, 1);
      display: block;
      margin-right: -1.3125rem;
      margin-left: -1.3125rem;
      padding-right: 1em;
      padding-left: 1.25em;
      border-left: 0.25em solid #805AD5;
    }
    `}
  />
)
