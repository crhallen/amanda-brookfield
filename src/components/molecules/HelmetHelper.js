import React from 'react'
import {Helmet} from 'react-helmet'

const HelmetHelper = ({title, metaDescription}) => (
  <Helmet titleTemplate="Amanda Brookfield, Best-Selling Novelist | %s">
    <title>{title}</title>
    <meta name="description" content={metaDescription} />
  </Helmet>
)
export default HelmetHelper
