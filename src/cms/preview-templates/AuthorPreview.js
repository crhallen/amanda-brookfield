import React from 'react'
import PropTypes from 'prop-types'
import {AuthorPageTemplate} from '../../templates/author-page'

const AuthorPagePreview = ({entry, widgetFor}) => {
  return (
    <AuthorPageTemplate
      title={entry.getIn(['data', 'title'])}
      content={widgetFor('body')}
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
