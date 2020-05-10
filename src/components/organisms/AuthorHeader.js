import React from 'react'

import MobileSketchHeading from '../molecules/MobileSketchHeading'
import AuthorNavItem from '../molecules/AuthorNavItem'

import Container from '../atoms/Container'

const AuthorHeader = ({inspirationImage, biographyImage, mabelImage}) => {
  return (
    <Container narrow>
      <MobileSketchHeading title="Author" sketchType="author" />
      <div css={'display: flex; margin: 0 -12px;'}>
        <AuthorNavItem
          to="/author/inspiration"
          title="Inspiration"
          imageInfo={inspirationImage}
        />
        <AuthorNavItem
          to="/author/biography"
          title="Biography"
          imageInfo={biographyImage}
        />
        <AuthorNavItem
          to="/author/mabel"
          title="Mabel"
          imageInfo={mabelImage}
        />
      </div>
    </Container>
  )
}

export default AuthorHeader
