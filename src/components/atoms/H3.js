import styled, {css} from 'styled-components'
import {crimsonTextFont} from '../../styles/mixins'

export const h3Mixin = css`
  ${crimsonTextFont}
  font-size: 16px;
  line-height: 1;
  letter-spacing: -0.5px;
  margin: 48px 0 24px;
`

const H3 = styled.h3`
  ${h3Mixin}
  ${({center}) => center && 'text-align: center;'}
  ${({margin = false}) => `margin: ${margin ? '48px 0 24px' : '0'};`}
`

export default H3
