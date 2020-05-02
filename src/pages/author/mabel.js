import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {kalamFont} from '../../styles/mixins'

import ExternalLink from '../../components/atoms/ExternalLink'
import Container from '../../components/atoms/Container'
import Page from '../../components/atoms/Page'
import HelmetHelper from '../../components/molecules/HelmetHelper'
import AuthorHeader from '../../components/organisms/AuthorHeader'
import H2 from '../../components/atoms/H2'
import Img from '../../components/PreviewCompatibleImage'

const InstagramCTA = styled.div`
  ${kalamFont}
  text-align: center;
  margin-bottom: 48px;
  margin-top: 16px;
  a {
    text-decoration: none !important;
  }
  .mabel-insta-icon {
    margin-top: 4px;
    font-size: 32px;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
`

const SquareImageWrapper = styled.div`
  position: relative;
  &::before {
    content: '';
    display: block;
    padding-bottom: 100%;
  }

  & > :first-child {
    position: absolute !important;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const MabelPage = ({data}) => {
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
        <H2 margin style={{marginBottom: 0}}>
          Mabel
        </H2>
        <InstagramCTA>
          <ExternalLink href="https://www.instagram.com/amanda_and_mabel_brookfield/">
            <div>Find us on Instagram!</div>
            <FontAwesomeIcon
              className="mabel-insta-icon"
              icon={['fab', 'instagram']}
            />
          </ExternalLink>
        </InstagramCTA>
        <Grid>
          {images.map(({node: image}) => (
            <ExternalLink
              href={`https://www.instagram.com/p/${image.id}`}
              key={image.id}
            >
              <SquareImageWrapper>
                <Img imageInfo={image.localFile} />
              </SquareImageWrapper>
            </ExternalLink>
          ))}
        </Grid>
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
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG
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
