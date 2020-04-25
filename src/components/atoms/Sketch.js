import styled from 'styled-components'
// import sketchSprite from '../../img/sketch-sprite.gif'
// import sketchSprite2x from '../../img/sketch-sprite@2x.gif'
import sketchSprite3x from '../../img/sketch-sprite@3x.gif'

const map = {
  books: 0,
  author: 1,
  blog: 2,
  events: 3,
  features: 4,
}
const Sketch = styled.div`
  width: 92px;
  height: 92px;
  background-image: url(${sketchSprite3x});
  @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    background-image: url(${sketchSprite3x});
  }
  @media (min-device-pixel-ratio: 3), (min-resolution: 288dpi) {
    background-image: url(${sketchSprite3x});
  }
  background-size: 200% auto;
  background-repeat: no-repeat;
  background-position-y: -${({type}) => map[type] * 92}px;
  ${props => props.center && 'margin: 0 auto;'}
  ${({enableHover, hoverComponent: hc}) =>
    (enableHover || hc) &&
    `${
      hc ? `${hc}:hover &` : `&:hover`
    } {background-position-x: right;}`}
  .active & {
    background-position-x: right;
  }
`

export default Sketch
