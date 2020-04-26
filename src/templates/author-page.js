import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'

import Content, {HTMLContent} from '../components/Content'
import Page from '../components/atoms/Page'
import Container from '../components/atoms/Container'
import HelmetHelper from '../components/molecules/HelmetHelper'
import AuthorNavItem from '../components/molecules/AuthorNavItem'
import MobileSketchHeading from '../components/molecules/MobileSketchHeading'

//TODO make images vary
import bioImg2x from '../img/bio-desktop@2x.jpg'
import inspImg2x from '../img/inspiration-desktop@2x.jpg'

export const AuthorPageTemplate = ({content, contentComponent}) => {
  const AuthorContent = contentComponent || Content

  return (
    <Page>
      <HelmetHelper
        title="Author"
        metaDescription="Read about my personal life-story and how I became a bestselling Penguin novelist. Discover the truth behind my literary inspirations and my private fears. Learn some secret writing tips."
      />
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
        </div>
        <AuthorContent content={content} />
      </Container>
    </Page>
  )
}

AuthorPageTemplate.propTypes = {
  events: PropTypes.array.isRequired,
}

const AuthorPage = ({data}) => {
  const {markdownRemark: post} = data

  return (
    <>
      <AuthorPageTemplate content={post.html} contentComponent={HTMLContent} />
    </>
  )
}

AuthorPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AuthorPage

export const authorPageQuery = graphql`
  query AuthorPage($id: String!) {
    markdownRemark(id: {eq: $id}) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`
