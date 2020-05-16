import React from 'react'
import {graphql} from 'gatsby'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {kalamFont} from '../styles/mixins'

import ExternalLink from '../components/atoms/ExternalLink'
import Container from '../components/atoms/Container'
import Page from '../components/atoms/Page'
import HelmetHelper from '../components/molecules/HelmetHelper'
import AuthorHeader from '../components/organisms/AuthorHeader'
import H2 from '../components/atoms/H2'
import Img from '../components/PreviewCompatibleImage'

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

export const MabelPageTemplate = ({
  title,
  instagramImages,
  metaDescription,
  inspirationImage,
  biographyImage,
  mabelImage,
  presetGalleryImage1,
  presetGalleryImage2,
}) => {
  const images = [
    {id: presetGalleryImage1.id, localFile: presetGalleryImage1.path},
    {id: presetGalleryImage2.id, localFile: presetGalleryImage2.path},
    ...instagramImages
      .map(({node}) => node)
      .sort((a, b) => b.timestamp - a.timestamp)
      .slice(0, 10),
  ]

  return (
    <Page>
      <HelmetHelper title={title} metaDescription={metaDescription} />
      <AuthorHeader
        inspirationImage={inspirationImage}
        biographyImage={biographyImage}
        mabelImage={mabelImage}
      />
      <Container>
        <H2 margin style={{marginBottom: 0}}>
          {title}
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
          {images.map(image => (
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

const MabelPage = ({data}) => {
  const {
    markdownRemark: post,
    allInstaNode: {edges: instagramImages},
  } = data

  return (
    <MabelPageTemplate
      title={post.frontmatter.title}
      inspirationImage={post.frontmatter.inspirationImage}
      biographyImage={post.frontmatter.biographyImage}
      mabelImage={post.frontmatter.mabelImage}
      instagramImages={instagramImages}
      metaDescription={post.frontmatter.metaDescription}
      presetGalleryImage1={post.frontmatter.presetGalleryImage1}
      presetGalleryImage2={post.frontmatter.presetGalleryImage2}
    />
  )
}

export default MabelPage

export const mabelPageQuery = graphql`
  query MabelPageQuery($id: String!) {
    markdownRemark(id: {eq: $id}) {
      id
      frontmatter {
        title
        metaDescription
        inspirationImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        biographyImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mabelImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        presetGalleryImage1 {
          id
          path {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        presetGalleryImage2 {
          id
          path {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
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
