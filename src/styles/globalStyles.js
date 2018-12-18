import {createGlobalStyle} from 'styled-components'
import styledNormalize from 'styled-normalize'
import fontFiles from './fonts'

export default createGlobalStyle`
  ${styledNormalize}
  * {
    box-sizing: border-box;
  }
  html {
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 
      'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 
      'Helvetica Neue', sans-serif;
  }
  h1, h2, h3, h4, h5, p {
    margin: 0;
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
`