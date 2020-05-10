import React from 'react'

import {BookPageTemplate} from '../../templates/book-page'

const BookPreview = ({entry, getAsset, widgetFor, widgetsFor}) => (
  <BookPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
    reviews={widgetsFor('reviews').map(review => ({
      text: review.getIn(['data', 'text']),
      reviewer: review.getIn(['data', 'reviewer']),
    }))}
    coverSketchImage={getAsset(entry.getIn(['data', 'coverSketchImage']))}
  />
)

export default BookPreview
