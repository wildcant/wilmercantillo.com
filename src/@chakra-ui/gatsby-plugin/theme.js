import { extendTheme } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import React from 'react'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({
  sizes: {},
  config,
  textStyles: {},
  fonts: {
    heading: 'Josefin Sans',
    body: 'Sf Pro Display',
  },
})

export default theme

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
      src: url("/fonts/Josefin-Sans-400-Regular.ttf");
    }
    @font-face {
      font-family: "Josefin Sans";
      font-weight: 400;
      font-style: italic;
      src: url("/fonts/Josefin_Sans/400-Italic.ttf");
    }
    `}
  />
)
