import React from 'react'
import PropTypes from 'prop-types'
import {EventsPageTemplate} from '../../templates/events-page'

const BookPreview = ({widgetsFor}) => (
  <EventsPageTemplate
    events={widgetsFor('events').map(event => ({
      title: event.getIn(['data', 'title']),
      formattedDate: event.getIn(['data', 'formattedDate']),
      description: event.getIn(['data', 'description']),
      time: event.getIn(['data', 'time']),
    }))}
  />
)

BookPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BookPreview
