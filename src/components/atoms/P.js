import styled, {css} from 'styled-components'

export const pMixin = css`
  line-height: ${props => props.theme.lineHeight};
  margin-bottom: 24px;
`

const P = styled.p`
  ${pMixin}
`
export default P
