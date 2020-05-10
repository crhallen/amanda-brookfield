import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {graphql} from 'gatsby'

import H2 from '../components/atoms/H2'
import SocialMediaLinks from '../components/molecules/SocialMediaLinks'
import Container from '../components/atoms/Container'
import BookWidget from '../components/molecules/BookWidget'
import GoodGirlsHero from '../components/organisms/GoodGirlsHero'
import Img from '../components/PreviewCompatibleImage'
import {crimsonTextFont} from '../styles/mixins'
import FullWidth from '../components/atoms/FullWidth'
import FeaturedBook from '../components/organisms/FeaturedBook'
import Sketch from '../components/atoms/Sketch'
import Page from '../components/atoms/Page'
import HelmetHelper from '../components/molecules/HelmetHelper'
import media from '../styles/mediaQueries'

const BannerImage = styled(Img)`
  width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
  height: 220px;
  max-width: 764px;
  object-fit: cover;
  ${media.aboveContainer`
    border-radius: 5px;
    overflow: hidden;
  `}
`
const WelcomeText = styled.div`
  max-width: 486px;
  width: 100%;
  margin: 48px auto;
  text-align: center;
  line-height: ${({theme}) => theme.lineHeight};
`
const FirstLetter = styled.span`
  ${crimsonTextFont}
  font-weight: normal;
  float: left;
  font-size: 48px;
  line-height: 48px;
  ${media.aboveMobile`
    transform: translateX(8px);
  `}
`

const Scroller = styled(FullWidth)`
  overflow-x: scroll;
  margin-bottom: 48px;
  -webkit-overflow-scrolling: touch;
`
const BestSellers = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${({theme}) => theme.containerWidth};
  padding: 0 ${({theme}) => theme.gutterSize} 24px;
  & > * {
    box-sizing: content-box;
    margin-right: 30px;
  }
  & > *:last-child {
    margin-right: 0;
    padding-right: ${({theme}) => theme.gutterSize};
    ${media.aboveMobile`
      padding-right: 0;
    `}
  }
`
const MobileOnlySketch = styled(Sketch)`
  margin: 48px auto;
  ${media.aboveMobile`
    display: none;
  `}
`

export const HomePageTemplate = ({
  metaDescription,
  bannerImage,
  welcomeText,
  bestSellers,
  hero,
  latestReleases = [],
}) => {
  return (
    <Page>
      <HelmetHelper title="Homepage" metaDescription={metaDescription} />
      <Container>
        <FullWidth>
          <BannerImage
            imageInfo={bannerImage}
            style={{margin: '0 auto', width: '100%'}}
          />
        </FullWidth>
        <WelcomeText>
          <FirstLetter>{welcomeText.charAt(0)}</FirstLetter>
          {welcomeText.substring(1)}
        </WelcomeText>
        <SocialMediaLinks />
        <MobileOnlySketch type="books" />
        <H2 margin>My Best-Sellers</H2>
        <Scroller>
          <BestSellers>
            {bestSellers.map((book, index) => (
              <BookWidget
                key={index}
                coverImage={book.coverImage}
                title={book.title}
                pagePath={book.path}
                buyUrl={book.amazonLink}
              />
            ))}
          </BestSellers>
        </Scroller>
      </Container>
      <GoodGirlsHero
        title={hero.title}
        text={hero.text}
        readMoreText={hero.readMoreText}
        readMorePath={hero.path}
        buyUrl={hero.amazonLink}
        coverImage={hero.coverImage}
      />
      <Container>
        <H2 margin>Latest Releases</H2>
        {latestReleases.map((latestRelease, i) => (
          <FeaturedBook
            key={i}
            title={latestRelease.title}
            coverImage={latestRelease.coverSketchImage}
            buyUrl={latestRelease.amazonLink}
            pagePath={latestRelease.path}
          >
            {latestRelease.blurb}
          </FeaturedBook>
        ))}
      </Container>
    </Page>
  )
}

HomePageTemplate.propTypes = {
  welcomeText: PropTypes.string.isRequired,
}

const HomePage = ({data}) => {
  const {
    markdownRemark: page,
    allMarkdownRemarkBooks: {edges},
    heroData,
  } = data

  const {metaDescription, bannerImage, welcomeText} = page.frontmatter

  const books = edges.map(({node: {frontmatter: book}}) => book)

  const bestSellersTitles = Object.values(page.frontmatter.bestSellers)
  const bestSellers = books.filter(book =>
    bestSellersTitles.includes(book.title),
  )

  const hero = {...heroData.frontmatter, ...page.frontmatter.heroSection}

  const latestReleasesItems = Object.keys(page.frontmatter.latestReleases)
    .sort()
    .map(key => page.frontmatter.latestReleases[key])
  const latestReleasesTitles = latestReleasesItems.map(({book}) => book)
  const latestReleases = books
    .filter(book => latestReleasesTitles.includes(book.title))
    .map((book, i) => ({...book, blurb: latestReleasesItems[i].blurb}))

  return (
    <HomePageTemplate
      metaDescription={metaDescription}
      bannerImage={bannerImage}
      welcomeText={welcomeText}
      bestSellers={bestSellers}
      hero={hero}
      books={books}
      latestReleases={latestReleases}
    />
  )
}

HomePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default HomePage

export const homePageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: {eq: $id}) {
      html
      frontmatter {
        metaDescription
        bannerImage {
          childImageSharp {
            fixed(width: 764, height: 220, quality: 90) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        welcomeText
        bestSellers {
          bestSeller1
          bestSeller2
          bestSeller3
          bestSeller4
          bestSeller5
        }
        heroSection {
          title
          text
          readMoreText
        }
        latestReleases {
          latestRelease1 {
            book
            blurb
          }
          latestRelease2 {
            book
            blurb
          }
          latestRelease3 {
            book
            blurb
          }
        }
      }
    }
    heroData: markdownRemark(frontmatter: {bookId: {eq: "good-girls"}}) {
      frontmatter {
        title
        path
        amazonLink
        coverImage {
          childImageSharp {
            fluid(maxWidth: 276) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
    allMarkdownRemarkBooks: allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___originalPublicationDate]}
      filter: {frontmatter: {templateKey: {eq: "book-page"}}}
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          fields {
            slug
          }
          frontmatter {
            bookId
            title
            templateKey
            path
            amazonLink
            coverImage {
              childImageSharp {
                fixed(width: 125, height: 192) {
                  ...GatsbyImageSharpFixed_tracedSVG
                }
              }
            }
            coverSketchImage {
              childImageSharp {
                fixed(width: 117, height: 165) {
                  ...GatsbyImageSharpFixed_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
