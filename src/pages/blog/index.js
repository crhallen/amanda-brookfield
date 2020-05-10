import React from 'react'
import {graphql} from 'gatsby'
import styled from 'styled-components'

import HelmetHelper from '../../components/molecules/HelmetHelper'
import MobileSketchHeading from '../../components/molecules/MobileSketchHeading'
import Page from '../../components/atoms/Page'
import Container from '../../components/atoms/Container'
import BlogSidebar from '../../components/organisms/BlogSidebar'
import BlogListItem from '../../components/molecules/BlogListItem'
import {hideBelowMobile} from '../../styles/mixins'

const BlogLayout = styled.div`
  display: flex;
`

const BlogIndexPage = ({data, selectedYear}) => {
  const {edges: posts, group} = data.allMarkdownRemark

  const years = group.map(({fieldValue, ...rest}) => ({
    fieldValue: fieldValue.substring(fieldValue.length - 4),
    ...rest,
  }))
  return (
    <Page>
      <HelmetHelper
        title="Blog"
        metaDescription="My blog is a welcoming space where I share candid, funny real-life experiences and thoughts about my personal struggles and milestones, as well as issues we all face in our everyday lives."
      />
      <Container narrow>
        <MobileSketchHeading title="Blog" sketchType="blog" />
        <BlogLayout>
          <BlogSidebar
            css={hideBelowMobile}
            posts={posts}
            years={years}
            selectedYear={selectedYear}
          />
          <div>
            {posts.map(({node: post}) => (
              <BlogListItem
                key={post.id}
                id={post.id}
                to={post.fields.slug}
                title={post.frontmatter.title}
                excerpt={post.excerpt}
                metaText={`${post.frontmatter.date} |  ${post.timeToRead} min read`}
              />
            ))}
          </div>
        </BlogLayout>
      </Container>
    </Page>
  )
}

export default BlogIndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___date]}
      filter: {frontmatter: {templateKey: {eq: "blog-post"}}}
    ) {
      group(field: fields___year) {
        fieldValue
        totalCount
      }
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          fields {
            slug
          }
          timeToRead
          frontmatter {
            title
            templateKey
            date(formatString: "ddd Do MMM, YYYY")
          }
        }
      }
    }
  }
`
