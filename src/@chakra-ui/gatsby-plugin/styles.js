import { Global } from '@emotion/react'
import React from 'react'

export const fonts = {
  heading: 'Recursive',
  body: 'Truculenta',
}
// TODO - Find a different place to store fonts
export const Fonts = () => (
  <Global
    styles={`
    /* Rouge Script */
    @font-face {
      font-family: 'Rouge Script';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/rougescript/v9/LYjFdGbiklMoCIQOw1Ep3S4_U__acpa69w.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    /* Fira Mono */
    @font-face {
      font-family: 'Fira Mono';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/firamono/v9/N0bX2SlFPv1weGeLZDtgJv7Ss9XZYQ.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    
    @font-face {
      font-family: 'Fira Mono';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/firamono/v9/N0bS2SlFPv1weGeLZDto1d3HnvfUS5NBBA.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    
    @font-face {
      font-family: 'Fira Mono';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/firamono/v9/N0bS2SlFPv1weGeLZDtondvHnvfUS5NBBA.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    
    @font-face {
      font-family: 'Rouge Script';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/rougescript/v9/LYjFdGbiklMoCIQOw1Ep3S4_U__acpa69w.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    /* Recursive */
    @font-face {
      font-family: 'Recursive';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/recursive/v23/8vI-7wMr0mhh-RQChyHEH06TlXhq_gukbYrFMk1QuAIcyEwG_X-dpEfaE5YaERmK-CImKsvxvU-MXGX2fSqasNfUlTGZnI14ZeY.woff2)
        format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
        U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
        U+FEFF, U+FFFD;
    }
    
    @font-face {
      font-family: 'Recursive';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/recursive/v23/8vI-7wMr0mhh-RQChyHEH06TlXhq_gukbYrFMk1QuAIcyEwG_X-dpEfaE5YaERmK-CImKsvxvU-MXGX2fSqasNfUlTGZnI14ZeY.woff2)
        format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
        U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
        U+FEFF, U+FFFD;
    }
    
    @font-face {
      font-family: 'Recursive';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/recursive/v23/8vI-7wMr0mhh-RQChyHEH06TlXhq_gukbYrFMk1QuAIcyEwG_X-dpEfaE5YaERmK-CImKsvxvU-MXGX2fSqasNfUlTGZnI14ZeY.woff2)
        format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
        U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
        U+FEFF, U+FFFD;
    }
    
    @font-face {
      font-family: 'Recursive';
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/recursive/v23/8vI-7wMr0mhh-RQChyHEH06TlXhq_gukbYrFMk1QuAIcyEwG_X-dpEfaE5YaERmK-CImKsvxvU-MXGX2fSqasNfUlTGZnI14ZeY.woff2)
        format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
        U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
        U+FEFF, U+FFFD;
    }
    
    @font-face {
      font-family: 'Recursive';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/recursive/v23/8vI-7wMr0mhh-RQChyHEH06TlXhq_gukbYrFMk1QuAIcyEwG_X-dpEfaE5YaERmK-CImKsvxvU-MXGX2fSqasNfUlTGZnI14ZeY.woff2)
        format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
        U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
        U+FEFF, U+FFFD;
    }
    
    @font-face {
      font-family: 'Recursive';
      font-style: normal;
      font-weight: 800;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/recursive/v23/8vI-7wMr0mhh-RQChyHEH06TlXhq_gukbYrFMk1QuAIcyEwG_X-dpEfaE5YaERmK-CImKsvxvU-MXGX2fSqasNfUlTGZnI14ZeY.woff2)
        format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
        U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
        U+FEFF, U+FFFD;
    }
    
    @font-face {
      font-family: 'Recursive';
      font-style: normal;
      font-weight: 900;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/recursive/v23/8vI-7wMr0mhh-RQChyHEH06TlXhq_gukbYrFMk1QuAIcyEwG_X-dpEfaE5YaERmK-CImKsvxvU-MXGX2fSqasNfUlTGZnI14ZeY.woff2)
        format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
        U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
        U+FEFF, U+FFFD;
    }
    
    /* Truculenta */
    @font-face {
      font-family: 'Truculenta';
      font-style: normal;
      font-weight: 100;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/truculenta/v6/LhWKMVvBKusVIfNYGi1-WvRVyDdZeeiySNppcu32Mb2f06y6Oa21F6Xth22p9-B8yw.woff2)
        format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
        U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
        U+FEFF, U+FFFD;
    }
    
    @font-face {
      font-family: 'Truculenta';
      font-style: normal;
      font-weight: 200;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/truculenta/v6/LhWKMVvBKusVIfNYGi1-WvRVyDdZeeiySNppcu32Mb2f06y6Oa21F6Xth22p9-B8yw.woff2)
        format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
        U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
        U+FEFF, U+FFFD;
    }
    
    @font-face {
      font-family: 'Truculenta';
      font-style: normal;
      font-weight: 300;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/truculenta/v6/LhWKMVvBKusVIfNYGi1-WvRVyDdZeeiySNppcu32Mb2f06y6Oa21F6Xth22p9-B8yw.woff2)
        format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
        U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
        U+FEFF, U+FFFD;
    }
    
    @font-face {
      font-family: 'Truculenta';
      font-style: normal;
      font-weight: 400;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/truculenta/v6/LhWKMVvBKusVIfNYGi1-WvRVyDdZeeiySNppcu32Mb2f06y6Oa21F6Xth22p9-B8yw.woff2)
        format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
        U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
        U+FEFF, U+FFFD;
    }
    
    @font-face {
      font-family: 'Truculenta';
      font-style: normal;
      font-weight: 500;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/truculenta/v6/LhWKMVvBKusVIfNYGi1-WvRVyDdZeeiySNppcu32Mb2f06y6Oa21F6Xth22p9-B8yw.woff2)
        format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
        U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
        U+FEFF, U+FFFD;
    }
    
    @font-face {
      font-family: 'Truculenta';
      font-style: normal;
      font-weight: 600;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/truculenta/v6/LhWKMVvBKusVIfNYGi1-WvRVyDdZeeiySNppcu32Mb2f06y6Oa21F6Xth22p9-B8yw.woff2)
        format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
        U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
        U+FEFF, U+FFFD;
    }
    
    @font-face {
      font-family: 'Truculenta';
      font-style: normal;
      font-weight: 700;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/truculenta/v6/LhWKMVvBKusVIfNYGi1-WvRVyDdZeeiySNppcu32Mb2f06y6Oa21F6Xth22p9-B8yw.woff2)
        format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
        U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
        U+FEFF, U+FFFD;
    }
    
    @font-face {
      font-family: 'Truculenta';
      font-style: normal;
      font-weight: 800;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/truculenta/v6/LhWKMVvBKusVIfNYGi1-WvRVyDdZeeiySNppcu32Mb2f06y6Oa21F6Xth22p9-B8yw.woff2)
        format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
        U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
        U+FEFF, U+FFFD;
    }
    
    @font-face {
      font-family: 'Truculenta';
      font-style: normal;
      font-weight: 900;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/truculenta/v6/LhWKMVvBKusVIfNYGi1-WvRVyDdZeeiySNppcu32Mb2f06y6Oa21F6Xth22p9-B8yw.woff2)
        format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
        U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
        U+FEFF, U+FFFD;
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
