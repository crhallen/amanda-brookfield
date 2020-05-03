import React from 'react'
import {HomePageTemplate} from '../../templates/home-page'
import get from 'lodash/get'

const extractCollectionData = ({
  collection,
  data,
  path = [],
  collectionName = 'books',
}) => {
  return Object.keys(collection)
    .map(fieldName => {
      const itemData = data[fieldName]

      if (!itemData) {
        return null
      }

      const value = collection[fieldName]
      const bookName = typeof value === 'string' ? value : get(value, [...path])

      return {
        ...(typeof value === 'object' ? value : {}),
        ...get(itemData, [...path, collectionName, bookName]),
      }
    })
    .filter(Boolean)
}

const HomePreview = ({entry, fieldsMetaData, getAsset}) => {
  const entryJS = entry.toJS()
  const {bestSellers, heroSection, latestReleases} = entryJS.data
  const {
    bestSellers: bestSellersMeta = {},
    heroSection: heroSectionMeta = {},
    latestReleases: latestReleasesMeta = {},
  } = fieldsMetaData.toJS()

  const bestSellersArr = extractCollectionData({
    collection: bestSellers,
    data: bestSellersMeta,
  }).map(book => ({
    ...book,
    coverImage: getAsset(book.coverImage),
    coverSketchImage: getAsset(book.coverSketchImage),
  }))

  const [heroData = {}] = extractCollectionData({
    collection: heroSection,
    data: heroSectionMeta,
  })

  const hero = {
    title: heroSection.title,
    text: heroSection.text,
    readMoreText: heroSection.readMoreText,
    path: heroData.path,
    buyUrl: heroData.amazonLink,
    coverImage: getAsset(heroData.coverImage),
  }

  const latestReleasesArr = extractCollectionData({
    collection: latestReleases,
    data: latestReleasesMeta,
    path: ['book'],
  }).map(book => ({
    ...book,
    coverImage: getAsset(book.coverImage),
    coverSketchImage: getAsset(book.coverSketchImage),
  }))

  return (
    <HomePageTemplate
      metaDescription={entry.getIn(['data', 'metaDescription'])}
      bannerImage={getAsset(entry.getIn(['data', 'bannerImage']))}
      welcomeText={entry.getIn(['data', 'welcomeText'])}
      bestSellers={bestSellersArr}
      hero={hero}
      latestReleases={latestReleasesArr}
    />
  )
}

export default HomePreview
