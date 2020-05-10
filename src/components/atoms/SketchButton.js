import React from 'react'
import styled from 'styled-components'

import ButtonBase from './ButtonBase'
import {kalamFont} from '../../styles/mixins'
import theme from '../../styles/theme'

const ButtonSvg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const SketchButton = styled(ButtonBase)`
  ${kalamFont}
  position: relative;
  height: 52px;
  padding: 0;
  width: ${({size}) => sizes[size] + 'px'};
  font-size: ${({size}) => (size === 'xl' ? '12px' : '14px')};
  letter-spacing: 2px;
  text-transform: ${({uppercase}) => uppercase && 'uppercase'};
  text-decoration: none !important;
  ${({center}) => center && `display: block; margin: 0 auto;`}
  &:hover ${ButtonSvg} {
    filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));
  }
`
const ButtonText = styled.div`
  position: relative;
  color: ${({styleType}) => textColors[styleType]};
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 100%;
`

const strokes = {
  primary: theme.red,
  outline: theme.red,
  orange: '#ffffff',
  blue: '#ffffff',
}
const fills = {
  primary: theme.red,
  outline: '#ffffff',
  orange: theme.orange,
  blue: theme.blue,
}
const textColors = {
  primary: '#ffffff',
  outline: theme.red,
  orange: '#ffffff',
  blue: '#ffffff',
}

const sizes = {
  sm: 125,
  md: 152,
  lg: 232,
  xl: 327,
}
const paths = {
  sm:
    'M3.782 6.033C7.687 4.51 34.93 2.45 54.799 2.45c19.87 0 65.759-1.523 67.618 1.03 1.86 2.552 3.302 18.168 2.58 25.629-.72 7.46 2.581 17.623 0 18.652-2.58 1.03-54.624 1.03-67.482 1.03-12.858 0-50.224 2.718-53.733 0-3.509-2.717-3.905-41.237 0-42.76z',
  md:
    'M4.383 6.033C9.13 4.51 42.258 2.45 66.42 2.45c24.161 0 79.962-1.523 82.223 1.03 2.26 2.552 4.015 18.168 3.138 25.629-.877 7.46 3.138 17.623 0 18.652-3.138 1.03-66.423 1.03-82.059 1.03-15.635 0-61.073 2.718-65.34 0-4.265-2.717-4.747-41.237 0-42.76z',
  lg:
    'M6.163 5.033c7.248-1.523 57.81-3.582 94.688-3.582S222.9-.072 226.35 2.48c3.45 2.552 6.128 18.168 4.79 25.629-1.34 7.46 4.789 17.623 0 18.652-4.79 1.03-101.383 1.03-125.248 1.03-23.865 0-93.217 2.718-99.729 0-6.511-2.717-7.247-41.237 0-42.76z',
  xl:
    'M8.278 5.033C18.493 3.51 89.76 1.45 141.738 1.45c51.98 0 172.025-1.523 176.889 1.03 4.863 2.552 8.638 18.168 6.75 25.629-1.887 7.46 6.751 17.623 0 18.652-6.75 1.03-142.896 1.03-176.533 1.03-33.638 0-131.388 2.718-140.566 0-9.179-2.717-10.215-41.237 0-42.76z',
}

export default function SketchButtonComponent(props) {
  return (
    <SketchButton {...props}>
      <ButtonSvg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${sizes[props.size] + 2} 52`}
        preserveAspectRatio="none"
      >
        <path
          fill={fills[props.styleType]}
          fillRule="nonzero"
          stroke={strokes[props.styleType]}
          strokeWidth="2"
          d={paths[props.size]}
        />
      </ButtonSvg>
      <ButtonText styleType={props.styleType}>{props.children}</ButtonText>
    </SketchButton>
  )
}

SketchButtonComponent.defaultProps = {
  styleType: 'primary',
  uppercase: false,
  size: 'md',
}
