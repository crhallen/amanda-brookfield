import React from 'react'
import PropTypes from 'prop-types'
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

ArticlePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ArticlePagePreview
