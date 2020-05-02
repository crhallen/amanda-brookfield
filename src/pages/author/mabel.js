import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'

import Container from '../../components/atoms/Container'
import Page from '../../components/atoms/Page'

import HelmetHelper from '../../components/molecules/HelmetHelper'
import AuthorHeader from '../../components/organisms/AuthorHeader'

const MabelPage = ({data}) => {
  console.log(data.allInstaNode)
  const {
    allInstaNode: {edges: images},
  } = data
  return (
    <Page>
      <HelmetHelper
        title="Mabel"
        // metaDescription="My gallery of bestselling women’s fiction gives plot out-lines that will satisfy readers looking for romantic, realistic, heart-rending stories about love, loss, family secrets and hope."
      />
      <AuthorHeader />
      <Container>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 16,
          }}
        >
          {images.map(({node: image}) => (
            // <div key={image.id}>
            <img
              // style={{
              //   objectFit: 'cover',
              //   width: '100%',
              //   height: ' 100%',
              //   // paddingBottom: '100%',
              // }}
              key={image.id}
              x={console.log(image)}
              src={image.original}
            />
            // </div>
          ))}
        </div>
      </Container>
    </Page>
  )
}

MabelPage.propTypes = {
  data: PropTypes.shape({}),
}

export default MabelPage

export const mabelPageQuery = graphql`
  query MabelPageQuery {
    allInstaNode {
      edges {
        node {
          id
          likes
          comments
          mediaType
          preview
          original
          timestamp
          caption
          localFile {
            childImageSharp {
              fixed(width: 150, height: 150) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          # Only available with the public api scraper
          thumbnails {
            src
            config_width
            config_height
          }
          dimensions {
            height
            width
          }
        }
      }
    }
  }
`
