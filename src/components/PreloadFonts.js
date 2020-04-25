import React from 'react'
import {Helmet} from 'react-helmet'
import fontFiles from '../styles/fonts'

const preloadFonts = Object.values(fontFiles).filter(fontPath =>
  fontPath.endsWith('woff2'),
)

const PreloadFonts = () => {
  return (
    <Helmet>
      {preloadFonts.map(fontPath => (
        <link
          key={fontPath}
          rel="preload"
          href={fontPath}
          as="font"
          type="font/woff2"
          //eslint-disable-next-line
          crossorigin="anonymous"
        />
      ))}
    </Helmet>
  )
}

export default PreloadFonts
