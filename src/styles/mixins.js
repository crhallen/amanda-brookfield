import {css} from 'styled-components'
import theme from './theme'
import media from './mediaQueries'

export const kalamFont = css`
  font-family: Kalam, cursive;
  font-weight: bold;
  text-rendering: geometricPrecision;
  -webkit-font-smoothing: antialiased;
  color: ${theme.red};
`

export const crimsonTextFont = css`
  font-family: 'Crimson Text', serif;
  font-weight: bold;
  text-rendering: geometricPrecision;
  -webkit-font-smoothing: antialiased;
`

export const hideBelowMobile = media.belowMobile`display: none;`
export const hideAboveMobile = media.aboveMobile`display: none;`

export const resetList = css`
  padding: 0;
  margin: 0;
  list-style: none;
`
