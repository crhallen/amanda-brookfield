import React from 'react'
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

export default AnnouncementPreview
