import styled from 'styled-components'

import {h2Mixin} from './H2'
import {h3Mixin} from './H3'
import {pMixin} from './P'
import {blockQuoteMixin} from './BlockQuote'
import media from '../../styles/mediaQueries'

const StyledMarkdown = styled.div`
  h2 {
    ${h2Mixin}
    margin: 48px 0;
    ${media.aboveMobile`
      margin: 72px 0;
    `}
  }
  h3 {
    ${h3Mixin}
  }
  p {
    ${pMixin}
  }
  blockquote {
    ${blockQuoteMixin}
  }
`

export default StyledMarkdown
