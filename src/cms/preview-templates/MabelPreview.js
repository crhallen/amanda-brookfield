import React from 'react'
import {MabelPageTemplate} from '../../templates/mabel-page'

const MabelPreview = ({entry}) => (
  <MabelPageTemplate
    title={entry.getIn(['data', 'title'])}
    metaDescription={entry.getIn(['data', 'metaDescription'])}
    images={[]}
  />
)

export default MabelPreview
