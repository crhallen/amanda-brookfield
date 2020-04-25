import styled, {css} from 'styled-components'
import {crimsonTextFont} from '../../styles/mixins'
import media from '../../styles/mediaQueries'

export const h2Mixin = css`
  ${crimsonTextFont}
  font-size: 20px;
  line-height: 1;
  letter-spacing: 1px;
  text-align: center;
  margin: 48px 0;
  ${media.aboveMobile`
    margin: 72px 0;
  `}
`

const H2 = styled.h2`
  ${crimsonTextFont}
  font-size: 20px;
  line-height: 1;
  letter-spacing: 1px;
  ${({center = true}) => `text-align: ${center ? 'center' : 'left'};`}
  ${({margin = false}) => !margin && 'margin: 0;'}
`

export default H2
