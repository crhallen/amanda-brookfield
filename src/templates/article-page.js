import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'

import HelmetHelper from '../components/molecules/HelmetHelper'
import Content, {HTMLContent} from '../components/Content'
import H2 from '../components/atoms/H2'
import Container from '../components/atoms/Container'
import Page from '../components/atoms/Page'
import BackButton from '../components/atoms/BackButton'
import BlogListItem from '../components/molecules/BlogListItem'
import ArticleSection from '../components/molecules/ArticleSection'
import media from '../styles/mediaQueries'

export const ArticlePageTemplate = ({
  title,
  content,
  contentComponent,
  metaDescription,
}) => {
  const PostContent = contentComponent || Content

  return (
    <Page>
      <HelmetHelper title={title} metaDescription={metaDescription} />
      <Container narrow>
        <BackButton />
        <H2 css={'margin: 20px 0 48px;'}>{title}</H2>
        <PostContent content={content} />
      </Container>
    </Page>
  )
}

ArticlePageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

const ArticlePage = ({data}) => {
  const {
    markdownRemark: article,
    allMarkdownRemark: {edges: articles},
  } = data

  shuffleArray(articles)
  const randomShortStory = articles.find(
    ({node}) => node.frontmatter.articleType === 'short-story',
  ).node
  const randomArticle = articles.find(
    ({node}) => node.frontmatter.articleType === 'article',
  ).node

  return (
    <>
      <ArticlePageTemplate
        content={article.html}
        contentComponent={HTMLContent}
        metaDescription={article.frontmatter.metaDescription}
        title={article.frontmatter.title}
      />
      <Container
        css={`
          margin-bottom: 48px;
          ${media.aboveMobile`
            margin-bottom: 72px;
          `}
        `}
      >
        <H2 css={'margin: 20px 0 48px;'}>Other Articles & Short Stories</H2>
        <ArticleSection>
          {[randomShortStory, randomArticle].map(post => (
            <div key={post.id} css={'flex: 1; margin: 0 12px 48px;'}>
              <BlogListItem
                title={post.frontmatter.title}
                to={post.fields.slug}
                excerpt={post.excerpt}
                readMoreText={
                  post.frontmatter.articleType === 'short-story'
                    ? 'Read Full Short Story >'
                    : post.frontmatter.articleType === 'article'
                    ? 'Read Full Article >'
                    : null
                }
                metaText={`${post.timeToRead} min read`}
              />
            </div>
          ))}
        </ArticleSection>
      </Container>
    </>
  )
}

ArticlePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ArticlePage

export const pageQuery = graphql`
  query ArticleById($id: String!) {
    markdownRemark(id: {eq: $id}) {
      id
      html
      frontmatter {
        title
        description
      }
    }
    allMarkdownRemark(
      filter: {frontmatter: {templateKey: {in: ["article-page"]}}}
    ) {
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
            articleType
          }
        }
      }
    }
  }
`
