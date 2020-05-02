import React from 'react'
import {graphql} from 'gatsby'

import Page from '../../components/atoms/Page'

import HelmetHelper from '../../components/molecules/HelmetHelper'
import AuthorHeader from '../../components/organisms/AuthorHeader'

const AuthorIndex = () => {
  return (
    <Page>
      <HelmetHelper
        title="Author"
        // metaDescription="My gallery of bestselling women’s fiction gives plot out-lines that will satisfy readers looking for romantic, realistic, heart-rending stories about love, loss, family secrets and hope."
      />
      <AuthorHeader />
    </Page>
  )
}

export default AuthorIndex

// Adding this dummy query in order to generate the page - easier than doing in gatbsy-node
export const authorIndexQuery = graphql`
  query AuthorIndexQuery {
    allInstaNode {
      edges {
        node {
          id
        }
      }
    }
  }
`
