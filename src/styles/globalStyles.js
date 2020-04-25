import {createGlobalStyle} from 'styled-components'
import styledNormalize from 'styled-normalize'
import fontFiles from './fonts'
import theme from './theme'
import {blockQuoteMixin} from '../components/atoms/BlockQuote'
import {h2Mixin} from '../components/atoms/H2'
import {pMixin} from '../components/atoms/P'
import {h3Mixin} from '../components/atoms/H3'

export default createGlobalStyle`
  ${styledNormalize}
  @font-face {
    font-family: "Crimson Text";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${fontFiles.crimsonText400Woff2}) format("woff2"),
       url(${fontFiles.crimsonText400Woff}) format("woff");
  }
  @font-face {
    font-family: "Crimson Text";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(${fontFiles.crimsonText700Woff2}) format("woff2"),
       url(${fontFiles.crimsonText700Woff}) format("woff");
  }
  @font-face {
    font-family: "Kalam";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(${fontFiles.kalam700Woff2}) format("woff2"),
       url(${fontFiles.kalam700Woff}) format("woff");
  }
  @font-face {
    font-family: "Kalam";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${fontFiles.kalam400Woff2}) format("woff2"),
       url(${fontFiles.kalam400Woff}) format("woff");
  }
  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${fontFiles.roboto400Woff2}) format("woff2"),
       url(${fontFiles.roboto400Woff}) format("woff");
  }
  @font-face {
    font-family: "Roboto";
    font-style: italic;
    font-weight: 400;
    src: url(${fontFiles.roboto400ItalicWoff2}) format("woff2"),
       url(${fontFiles.roboto400ItalicWoff}) format("woff");
  }
  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(${fontFiles.roboto700Woff2}) format("woff2"),
       url(${fontFiles.roboto700Woff}) format("woff");
  }
  * {
    box-sizing: border-box;
  }
  html {
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 
      'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 
      'Helvetica Neue', sans-serif;
    color: ${theme.black};
    font-size: 14px;
    min-width: 320px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    min-width: 320px;
  }
  h1, h2, h3, h4, h5, p {
    margin: 0;
  }
  h2 {
    ${h2Mixin}
  }
  h3 {
    ${h3Mixin}
  }
  p {
    ${pMixin}
  }
  a {
    color: ${theme.red};
    &:hover{
      color: #cc271a;
    }
  }
  blockquote {
    ${blockQuoteMixin}
  }
  ul {
    margin: 24px 0;
    padding-left: 24px;
  }
  li {
    line-height: ${theme.lineHeight};
    margin-bottom: 16px;
  }
  img {
    max-width: 100%;
    height: auto;
  }

`
