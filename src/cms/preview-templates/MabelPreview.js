import React from 'react'
import {MabelPageTemplate} from '../../templates/mabel-page'
import instaPlaceholder from '../../img/insta-placeholder.gif'

const MabelPreview = ({entry, getAsset}) => (
  <MabelPageTemplate
    title={entry.getIn(['data', 'title'])}
    metaDescription={entry.getIn(['data', 'metaDescription'])}
    inspirationImage={getAsset(entry.getIn(['data', 'inspirationImage']))}
    biographyImage={getAsset(entry.getIn(['data', 'biographyImage']))}
    mabelImage={getAsset(entry.getIn(['data', 'mabelImage']))}
    images={new Array(12)
      .fill(instaPlaceholder)
      .map((url, i) => ({node: {id: i, localFile: {url}}}))}
  />
)

export default MabelPreview
