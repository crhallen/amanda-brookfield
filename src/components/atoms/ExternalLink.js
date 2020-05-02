import React from 'react'
import styled from 'styled-components'
import {OutboundLink} from 'gatsby-plugin-google-analytics'

const ExternalLink = styled(({href, children}) => (
  <OutboundLink href={href}>{children}</OutboundLink>
)).attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})``

export default ExternalLink
