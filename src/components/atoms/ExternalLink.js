import React from 'react'
import {OutboundLink} from 'gatsby-plugin-google-analytics'

const ExternalLink = ({
  href,
  target = '_blank',
  rel = 'noopener noreferrer',
  children,
}) => (
  <OutboundLink href={href} target={target} rel={rel}>
    {children}
  </OutboundLink>
)

export default ExternalLink
