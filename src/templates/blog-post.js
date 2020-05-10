import React from 'react'
import PropTypes from 'prop-types'

import {graphql} from 'gatsby'
import Content, {HTMLContent} from '../components/Content'
import H2 from '../components/atoms/H2'
import Container from '../components/atoms/Container'
import Page from '../components/atoms/Page'
import BackButton from '../components/atoms/BackButton'
import HelmetHelper from '../components/molecules/HelmetHelper'

export const BlogPostTemplate = ({title, content, contentComponent}) => {
  const PostContent = contentComponent || Content

  return (
    <Page>
      <HelmetHelper title={title} />
      <Container narrow>
        <BackButton />
        <H2 css={'margin: 20px 0 48px;'}>{title}</H2>
        <PostContent content={content} />
      </Container>
    </Page>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
}

const BlogPost = ({data}) => {
  const {markdownRemark: post} = data

  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
    />
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: {eq: $id}) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`
