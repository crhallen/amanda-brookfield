import React from 'react'
import {MabelPageTemplate} from '../../templates/mabel-page'
import instaPlaceholder from '../../img/insta-placeholder.gif'

const MabelPreview = ({entry, getAsset}) => {
  const {data} = entry.toJS()

  const presetGalleryImage1 = {
    id: data.presetGalleryImage1.id,
    path: getAsset(data.presetGalleryImage1.path),
  }

  const presetGalleryImage2 = {
    id: data.presetGalleryImage2.id,
    path: getAsset(data.presetGalleryImage2.path),
  }

  return (
    <MabelPageTemplate
      title={entry.getIn(['data', 'title'])}
      metaDescription={entry.getIn(['data', 'metaDescription'])}
      description={entry.getIn(['data', 'description'])}
      inspirationImage={getAsset(entry.getIn(['data', 'inspirationImage']))}
      biographyImage={getAsset(entry.getIn(['data', 'biographyImage']))}
      mabelImage={getAsset(entry.getIn(['data', 'mabelImage']))}
      presetGalleryImage1={presetGalleryImage1}
      presetGalleryImage2={presetGalleryImage2}
      instagramImages={new Array(12)
        .fill(instaPlaceholder)
        .map((url, i) => ({node: {id: i, localFile: {url}}}))}
    />
  )
}

export default MabelPreview
