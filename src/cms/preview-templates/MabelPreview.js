import React from 'react'
import {MabelPageTemplate} from '../../templates/mabel-page'
import instaPlaceholder from '../../img/insta-placeholder.gif'

const MabelPreview = ({entry}) => (
  <MabelPageTemplate
    title={entry.getIn(['data', 'title'])}
    metaDescription={entry.getIn(['data', 'metaDescription'])}
    images={new Array(12)
      .fill(instaPlaceholder)
      .map((url, i) => ({node: {id: i, localFile: {url}}}))}
  />
)

export default MabelPreview
