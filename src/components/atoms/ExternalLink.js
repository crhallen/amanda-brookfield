import React from 'react'
import {OutboundLink} from 'gatsby-plugin-google-analytics'

const ExternalLink = ({
  href,
  target = '_blank',
  rel = 'noopener noreferrer',
  children,
  className,
}) => (
  <OutboundLink href={href} target={target} rel={rel} className={className}>
    {children}
  </OutboundLink>
)

export default ExternalLink
