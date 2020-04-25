import styled, {css} from 'styled-components'

export const blockQuoteMixin = css`
  margin: 24px 0 24px 24px;
  font-style: italic;
  line-height: ${({theme}) => theme.lineHeight};
`

const BlockQuote = styled.blockquote`
  ${blockQuoteMixin}
`

export default BlockQuote
