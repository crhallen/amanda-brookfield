import React from 'react'
import styled from 'styled-components'
import {graphql} from 'gatsby'

import BookWidget from '../../components/molecules/BookWidget'
import MobileSketchHeading from '../../components/molecules/MobileSketchHeading'
import Container from '../../components/atoms/Container'
import media from '../../styles/mediaQueries'
import Page from '../../components/atoms/Page'

import HelmetHelper from '../../components/molecules/HelmetHelper'

const BooksWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-right: -30px;
  > div {
    margin-right: 30px;
    margin-bottom: 24px;
  }
  ${media.belowMobile`
    margin-right: -16px;
    > div {
    margin-right: 16px;
  }
  `}
`

const BooksPage = ({data}) => {
  const {
    allMarkdownRemark: {edges: books},
  } = data
  return (
    <Page>
      <HelmetHelper
        title="Books"
        metaDescription="My gallery of bestselling women’s fiction gives plot out-lines that will satisfy readers looking for romantic, realistic, heart-rending stories about love, loss, family secrets and hope."
      />
      <Container>
        <MobileSketchHeading title="Books" sketchType="books" />
        <BooksWrapper>
          {books.map(({node: book}) => (
            <BookWidget
              key={book.id}
              coverImage={book.frontmatter.coverImage}
              title={book.frontmatter.title}
              pagePath={book.frontmatter.path}
              buyUrl={book.frontmatter.amazonLink}
            />
          ))}
        </BooksWrapper>
      </Container>
    </Page>
  )
}

export default BooksPage

export const pageQuery = graphql`
  query BooksPageQuery {
    allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___originalPublicationDate]}
      filter: {frontmatter: {templateKey: {in: ["book-page"]}}}
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          fields {
            slug
          }
          frontmatter {
            bookId
            title
            templateKey
            path
            amazonLink
            coverImage {
              childImageSharp {
                fixed(width: 125, height: 192, quality: 90) {
                  ...GatsbyImageSharpFixed_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
