import React from 'react'
import Img from 'gatsby-image'

const ImgFluidOrFixed = ({style, childImageSharp, alt, className}) => {
  if (childImageSharp.fluid) {
    return (
      <Img
        style={style}
        className={className}
        fluid={childImageSharp.fluid}
        alt={alt}
      />
    )
  }

  if (childImageSharp.fixed) {
    return (
      <Img
        style={style}
        className={className}
        fixed={childImageSharp.fixed}
        alt={alt}
      />
    )
  }

  return null
}

const PreviewCompatibleImage = ({imageInfo, style, className}) => {
  if (!imageInfo) {
    return null
  }

  const {alt = '', childImageSharp, image, url} = imageInfo

  if (image?.childImageSharp) {
    return (
      <ImgFluidOrFixed
        className={className}
        style={style}
        childImageSharp={image.childImageSharp}
        alt={alt}
      />
    )
  }

  if (childImageSharp) {
    return (
      <ImgFluidOrFixed
        className={className}
        style={style}
        childImageSharp={childImageSharp}
        alt={alt}
      />
    )
  }

  if (typeof url === 'string') {
    return (
      <img
        style={{display: 'block', ...style}}
        className={className}
        src={url}
        alt={alt}
      />
    )
  }

  return null
}

export default PreviewCompatibleImage
