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
    // Code block
    /**
     * Based on overeacted from Dan Abramov which at the time was based on copypasta from Remy Bach and Sarah Drasner
     */
    code[class*='language-'],
    pre[class*='language-'] {
      color: white;
      background: none;
      font-family: Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace;
      font-feature-settings: normal;
      text-align: left;
      white-space: pre;
      word-spacing: normal;
      word-break: normal;
      word-wrap: normal;
      line-height: 1.5;
      margin-bottom: 0;

      -moz-tab-size: 4;
      -o-tab-size: 4;
      tab-size: 4;

      -webkit-hyphens: none;
      -moz-hyphens: none;
      -ms-hyphens: none;
      hyphens: none;
    }

    /* Code blocks */
    pre[class*='language-'] {
      overflow: auto;
      padding: 1.3125rem;
    }

    pre[class*='language-']::-moz-selection {
      /* Firefox */
      background: hsl(207, 4%, 16%);
    }

    pre[class*='language-']::selection {
      /* Safari */
      background: hsl(207, 4%, 16%);
    }

    /* Text Selection colour */
    pre[class*='language-']::-moz-selection,
    pre[class*='language-'] ::-moz-selection {
      text-shadow: none;
      background: hsla(0, 0%, 100%, 0.15);
    }

    pre[class*='language-']::selection,
    pre[class*='language-'] ::selection {
      text-shadow: none;
      background: hsla(0, 0%, 100%, 0.15);
    }

    /* Inline code */
    :not(pre) > code[class*='language-'] {
      border-radius: 0.3em;
      background: var(--inlineCode-bg);
      color: var(--inlineCode-text);
      padding: 0.15em 0.2em 0.05em;
      white-space: normal;
    }

    .token.attr-name {
      color: rgb(173, 219, 103);
      font-style: italic;
    }

    .token.comment {
      color: rgb(128, 147, 147);
    }

    .token.string,
    .token.url {
      color: rgb(173, 219, 103);
    }

    .token.variable {
      color: rgb(214, 222, 235);
    }

    .token.number {
      color: rgb(247, 140, 108);
    }

    .token.builtin,
    .token.char,
    .token.constant,
    .token.function {
      color: rgb(130, 170, 255);
    }

    .token.punctuation {
      color: rgb(199, 146, 234);
    }

    .token.selector,
    .token.doctype {
      color: rgb(199, 146, 234);
      font-style: 'italic';
    }

    .token.class-name {
      color: rgb(255, 203, 139);
    }

    .token.tag,
    .token.operator,
    .token.keyword {
      color: #ffa7c4;
    }

    .token.boolean {
      color: rgb(255, 88, 116);
    }

    .token.property {
      color: rgb(128, 203, 196);
    }

    .token.namespace {
      color: rgb(178, 204, 214);
    }

    pre[data-line] {
      padding: 1em 0 1em 3em;
      position: relative;
    }

    .gatsby-highlight-code-line {
      background-color: hsla(207, 95%, 15%, 1);
      display: block;
      margin-right: -1.3125rem;
      margin-left: -1.3125rem;
      padding-right: 1em;
      padding-left: 1.25em;
      border-left: 0.25em solid #ffa7c4;
    }

    .gatsby-highlight {
      margin-bottom: 1.75rem;
      margin-left: -1.3125rem;
      margin-right: -1.3125rem;
      border-radius: 10px;
      background: #011627;
      -webkit-overflow-scrolling: touch;
      overflow: auto;
    }

    @media (max-width: 672px) {
      .gatsby-highlight {
        border-radius: 0;
      }
    }

    .gatsby-highlight pre[class*='language-'] {
      float: left;
      min-width: 100%;
    }

    `}
  />
)
