import React from 'react'
import PropTypes from 'prop-types'
import {AnnouncementTemplate} from '../../components/molecules/Announcement'

const AnnouncementPreview = ({entry, widgetFor, getAsset}) => {
  return (
    <AnnouncementTemplate
      title={entry.getIn(['data', 'title'])}
      content={widgetFor('body')}
      buttonLink={entry.getIn(['data', 'buttonLink'])}
      buttonText={entry.getIn(['data', 'buttonText'])}
      isDisabled={entry.getIn(['data', 'isDisabled'])} //NB: the prop is not passed this way in the real application
      image={getAsset(entry.getIn(['data', 'image']))} //NB: the prop is not passed this way in the real application
    />
  )
}

AnnouncementPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AnnouncementPreview
