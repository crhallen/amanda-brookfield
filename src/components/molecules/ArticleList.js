import React from 'react'

import media from '../../styles/mediaQueries'
import H2 from '../../components/atoms/H2'
import BlogListItem from '../../components/molecules/BlogListItem'

const ArticleList = ({title, items, readMoreText}) => (
  <div css={'flex: 1; margin: 0 12px;'}>
    {title && (
      <H2
        css={`
          margin: 0 0 48px;
          ${media.aboveMobile`
            margin-bottom: 72px;
        `}
        `}
      >
        {title}
      </H2>
    )}
    <div>
      {items.map(({node}) => (
        <BlogListItem
          key={node.id}
          title={node.frontmatter.title}
          to={node.fields.slug}
          excerpt={node.excerpt}
          readMoreText={readMoreText}
          metaText={`${node.timeToRead} min read`}
        />
      ))}
    </div>
  </div>
)

export default ArticleList
