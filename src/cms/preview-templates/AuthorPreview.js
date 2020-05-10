import React from 'react'
import PropTypes from 'prop-types'
import {AuthorPageTemplate} from '../../templates/author-page'

const AuthorPagePreview = ({entry, widgetFor}) => {
  let content

  try {
    content = widgetFor('body')
  } catch (err) {
    content = ''
  }

  return (
    <AuthorPageTemplate
      metaDescription={entry.getIn(['data', 'metaDescription'])}
      title={entry.getIn(['data', 'title'])}
      content={content}
    />
  )
}

AuthorPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AuthorPagePreview
