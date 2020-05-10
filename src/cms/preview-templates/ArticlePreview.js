import React from 'react'
import {ArticlePageTemplate} from '../../templates/article-page'

const ArticlePagePreview = ({entry, widgetFor}) => {
  return (
    <ArticlePageTemplate
      metaDescription={entry.getIn(['data', 'metaDescription'])}
      content={widgetFor('body')}
      title={entry.getIn(['data', 'title'])}
    />
  )
}

export default ArticlePagePreview
