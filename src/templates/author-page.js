import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'

import Content, {HTMLContent} from '../components/Content'
import Page from '../components/atoms/Page'
import Container from '../components/atoms/Container'
import HelmetHelper from '../components/molecules/HelmetHelper'

import StyledMarkdown from '../components/atoms/StyledMarkdown'
import AuthorHeader from '../components/organisms/AuthorHeader'

export const AuthorPageTemplate = ({content, contentComponent}) => {
  const AuthorContent = contentComponent || Content

  return (
    <Page>
      <HelmetHelper
        title="Author"
        metaDescription="Read about my personal life-story and how I became a bestselling Penguin novelist. Discover the truth behind my literary inspirations and my private fears. Learn some secret writing tips."
      />
      <AuthorHeader />
      <Container narrow>
        <StyledMarkdown>
          <AuthorContent content={content} />
        </StyledMarkdown>
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
