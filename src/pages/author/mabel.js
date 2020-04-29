import React from 'react'
import PropTypes from 'prop-types'

import {graphql} from 'gatsby'

import Container from '../../components/atoms/Container'
import Page from '../../components/atoms/Page'

import HelmetHelper from '../../components/molecules/HelmetHelper'

// const BooksWrapper = styled.section`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-around;
//   margin-right: -30px;
//   > div {
//     margin-right: 30px;
//     margin-bottom: 24px;
//   }
//   ${media.belowMobile`
//     margin-right: -16px;
//     > div {
//     margin-right: 16px;
//   }
//   `}
// `

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
      <Container>
        <div>
          {images.map(({node: image}) => (
            <img x={console.log(image)} key={image.id} src={image.original} />
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

export const pageQuery = graphql`
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
