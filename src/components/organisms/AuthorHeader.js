import React from 'react'

import MobileSketchHeading from '../molecules/MobileSketchHeading'
import AuthorNavItem from '../molecules/AuthorNavItem'

//TODO make images vary
import bioImg2x from '../../img/bio-desktop@2x.jpg'
import inspImg2x from '../../img/inspiration-desktop@2x.jpg'
import Container from '../atoms/Container'

const AuthorHeader = () => {
  return (
    <Container narrow>
      <MobileSketchHeading title="Author" sketchType="author" />
      <div css={'display: flex; margin: 0 -12px;'}>
        <AuthorNavItem
          to="/author/inspiration"
          title="Inspiration"
          img={inspImg2x}
        />
        <AuthorNavItem
          to="/author/biography"
          title="Biography"
          img={bioImg2x}
        />
        <AuthorNavItem to="/author/mabel" title="Mabel" img={bioImg2x} />
      </div>
    </Container>
  )
}

export default AuthorHeader
