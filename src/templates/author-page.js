import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'

import Content, {HTMLContent} from '../components/Content'
import Page from '../components/atoms/Page'
import Container from '../components/atoms/Container'
import HelmetHelper from '../components/molecules/HelmetHelper'

export const AuthorPageTemplate = ({content, contentComponent}) => {
  const ItemContent = contentComponent || Content

  return (
    <Page>
      <HelmetHelper
        title="Author"
        metaDescription="Get up-to-date news of my latest book events and public appearances. Come and meet me and my amazing dog, Mabel, for signings of my new memoir bestseller ‘For the Love of a Dog.’"
      />
      <Container narrow>
        <ItemContent content={content} />
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
    <AuthorPageTemplate content={post.html} contentComponent={HTMLContent} />
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
      # frontmatter {
      #   date(formatString: "MMMM DD, YYYY")
      #   title
      #   description
      # }
    }
  }
`
