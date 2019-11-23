import React, {useRef, useState} from 'react'
import PropTypes from 'prop-types'
import {Link, graphql} from 'gatsby'
import styled from 'styled-components'

import media from '../../styles/mediaQueries'
import BlockQuote from '../../components/atoms/BlockQuote'
import B from '../../components/atoms/B'
import H2 from '../../components/atoms/H2'
import H3 from '../../components/atoms/H3'
import Container from '../../components/atoms/Container'
import Page from '../../components/atoms/Page'
import MobileSketchHeading from '../../components/molecules/MobileSketchHeading'
import {kalamFont} from '../../styles/mixins'
import HelmetHelper from '../../components/molecules/HelmetHelper'

import bioImg2x from '../../img/bio-desktop@2x.jpg'
import inspImg2x from '../../img/inspiration-desktop@2x.jpg'

const scroll = ref => {
  window.scrollTo({
    top: ref.current.offsetTop - 16,
    left: 0,
    behavior: 'smooth',
  })
}

const Background = styled.div`
  flex: 1 0 auto;
  border-radius: 5px;
  height: 150px;
  cursor: pointer;
  margin: 12px;
  background-size: cover;
  background-position: center;
  ${media.aboveMobile`
    height: 180px;
  `}
`

const ReadMore = styled.div`
  ${kalamFont};
  letter-spacing: 2px;
  opacity: 1;
  transition: opacity 200ms ease-in-out;
  ${media.aboveMobile`
    opacity: 0;
  `}
`

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.6);
  &:hover ${ReadMore} {
    opacity: 1;
  }
`

const AuthorImageScroller = ({title, onClick, img}) => {
  return (
    <Background
      css={`
        background-image: url(${img});
      `}
      onClick={onClick}
    >
      <Overlay>
        <H2 css={'margin: 16px 0 8px;'}>{title}</H2>
        <ReadMore>Read More</ReadMore>
      </Overlay>
    </Background>
  )
}

const getBook = (id, books) => {
  const {node} =
    books.find(({node: book}) => book.frontmatter.bookId === id) || {}
  return node
}

const MODES = {
  inspiration: 'inspiration',
  biography: 'biography',
}

const AuthorPage = ({data}) => {
  const [mode, setMode] = useState(MODES.inspiration)
  const contentRef = useRef(null)

  const {
    allMarkdownRemarkBooks: {edges: books},
  } = data

  const theGodmother = getBook('the-godmother', books)
  const aFamilyMan = getBook('a-family-man', books)
  const relativeLove = getBook('relative-love', books)
  const lifeBegins = getBook('life-begins', books)
  const theLoveChild = getBook('the-love-child', books)

  return (
    <Page>
      <HelmetHelper
        title="Author"
        metaDescription="Read about my personal life-story and how I became a bestselling Penguin novelist. Discover the truth behind my literary inspirations and my private fears. Learn some secret writing tips."
      />
      <Container narrow>
        <MobileSketchHeading title="Author" sketchType="author" />
        <div ref={contentRef} css={'display: flex; margin: 0 -12px;'}>
          <AuthorImageScroller
            onClick={() => {
              setMode(MODES.inspiration)
              scroll(contentRef)
            }}
            title="Inspiration"
            img={inspImg2x}
          />
          <AuthorImageScroller
            onClick={() => {
              setMode(MODES.biography)
              scroll(contentRef)
            }}
            title="Biography"
            img={bioImg2x}
          />
        </div>
        {mode === MODES.inspiration && (
          <>
            <H2 margin>Inspiration</H2>
            <H3 margin center={false}>
              Where Do I Get My Ideas From?
            </H3>
            <div>
              <p>
                Inspiration is a tricky, hard-to-pin-down business. It is also,
                by definition, deeply private and - at times - extraordinarily
                mysterious.
              </p>
              <p>
                But with twenty years of writing and thirteen novels under my
                belt, I am prepared to reveal the following:
              </p>
              <ul>
                <li>
                  Nothing makes inspiration disappear faster than the sense that
                  it is being actively ‘hunted down’. This is, I am sure, why it
                  always strikes me at the most inopportune moments, like when
                  I’m stuck in a traffic jam, or pinned to the dentist’s chair,
                  or in the small hours too nearly asleep to be bothered to
                  stumble in search of a pen and pad...
                </li>
                <li>
                  For no matter how fantastic the idea, I have learned that I
                  need to WRITE IT DOWN, or it will be lost under the jumble of
                  shopping lists, decisions about what to eat/wear, latest hot
                  gossip, what to watch on telly and all the other vital things
                  that constitute my action-packed, non-inspirational life.
                </li>
                <li>
                  Curiosity/Observation about the world…nosiness…?! Whatever you
                  want to call it, I find that the tiniest physical detail –
                  buck-teeth, a head of lustrous hair, bitten nails, a fallen
                  tree, the shape of a cloud – can set in motion the idea for an
                  entire character or scene. It’s like reality is the trigger,
                  but then my imagination barges it out of the way and takes
                  over.
                </li>
              </ul>
              <H3 margin center={false}>
                What if
              </H3>
              <p>
                This is a game I play all the time in order to get under the
                skin of my characters.
              </p>
              <p>
                For example, in writing my novel{' '}
                <Link to={theGodmother.fields.slug}>The Godmother</Link>, I
                asked myself:
              </p>
              <BlockQuote>
                What if I had pursued a career in business and hadn’t had
                children, or got married? What would I do if I decided that,
                although single, becoming a mother was important after all?
              </BlockQuote>
              <p>
                Or, in writing{' '}
                <Link to={aFamilyMan.fields.slug}>A Family Man</Link>:
              </p>
              <BlockQuote>
                What if a decent, hard-working thirtysomething Dad came home one
                evening to find that his wife had simply disappeared, leaving
                behind their four year old son?
              </BlockQuote>
              <p>
                Or, in writing{' '}
                <Link to={relativeLove.fields.slug}>Relative Love</Link>:
              </p>
              <BlockQuote>
                What if the worst, most unforeseeable tragedy befell a close
                family?
              </BlockQuote>
              <p>
                Or, in writing{' '}
                <Link to={lifeBegins.fields.slug}>Life Begins</Link>:
              </p>
              <BlockQuote>
                What if the direction of an entire life was based on a single,
                seismic childhood event?
              </BlockQuote>
              <p>
                Or, in writing{' '}
                <Link to={theLoveChild.fields.slug}>The Love Child</Link>:
              </p>
              <BlockQuote>
                {`What if a 40 year old had sex with his best friend's just-sixteen
              year old daughter? Could that ever be deemed 'right' or truly
              'consensual' ?`}
              </BlockQuote>
              <H3 margin center={false}>
                More Personal Stuff
              </H3>
              <p>
                My inspiration also appears to be propelled by a combination of
                the following:
              </p>
              <ul>
                <li>
                  <B>Terror</B> (of failure, of missing a deadline, of an empty
                  day, of losing my touch... of pretty much anything, in fact).
                </li>
                <li>
                  The <B>right coffee mug</B>, the right pen... superstition
                  rules.
                </li>
                <li>
                  The weird, wonderful,{' '}
                  <B>occasional sense of the story pre-existing</B>, of it
                  needing, simply, to be told, with me in the happy position of
                  being the one to tell it.
                </li>
              </ul>
            </div>
          </>
        )}
        {mode === MODES.biography && (
          <div>
            <H2 margin>Biography</H2>
            <p>
              My twin brother and I were born in 1960 to Foreign Office parents
              having a spell in England between postings. I would have liked a
              more exotic place of birth, (like my two elder sisters, born in
              Saigon and Singapore respectively), but had to settle instead for
              St George’s hospital, in Hyde Park, where it then was. With four
              kids under the age of four and no disposable nappies or washing
              machines, my Mum was pretty pleased when they headed off to man
              the British Consulate in Shanghai for a couple of years, a job
              that involved living in a grand house in a compound with hot and
              cold running servants. We even had a governess – a lovely person
              who is still a family friend – as there was no school for us to
              attend. So protected was our world, that we only really left the
              compound for ballet and piano lessons, or tea parties with the
              children of other diplomats. I can remember still the sea of faces
              that would press up against the car as our driver edged through
              the crowded streets, the bafflement of being stared at.
            </p>
            <p>
              I was six when we left Shanghai, rushed out – as I learnt later -
              because of the Cultural Revolution, which was just starting and
              which saw many dear friends of my parents tortured or imprisoned.
              After that we lived in Germany for three years where I had my
              first experience of ‘proper’ education at an international
              preparatory school - a melting-pot of cultures and creeds that
              gave me my first inkling of how tough and complicated the world
              could be. But it wasn’t until returning to London, aged 9, that I
              had my first brush with real unhappiness, feeling like an outsider
              at my starchy girls day school and missing my brother and sisters
              who had been despatched to boarding school ahead of me in
              preparation for the next posting abroad. When that posting came –
              to Stockholm – I too was sent away – to Godolphin School in
              Salisbury - but settled quickly and happily, secure in the
              knowledge that I was making friends to whom I wouldn’t have to say
              an eventual goodbye. The relief remains vivid – several of them
              are close to me still.
            </p>
            <p>
              I would recommend Stockholm to any teenager interested in parties,
              skiing, boating and ice hockey…every holiday was an adventure and
              left me and my siblings with a bond that remains to this day.
              Returning to England at the end of the seventies, things got a
              little more serious with A levels and university applications. To
              everyone’s intense surprise (especially my own) I was offered a
              place at Oxford to study English, a subject chosen mostly because
              I could think of nothing more pleasurable than a licence to read
              books for three years! In fact, there was so much reading – the
              course was a chronological jaunt from Anglo Saxon to modern
              literature – that it was a long while after my finals before I
              even considered picking up a novel for relaxation ie simply to
              enjoy the story rather than trying to think of something clever to
              say about it.
            </p>
            <p>
              After such a peripatetic childhood, I had no intention of working
              anywhere but England. I joined a London advertising agency as an
              account manager, where I spent a lot of time envying the
              ‘creatives’ – paid to write words and draw pictures - but still
              had a lot of fun. A good salary, a company car - I was doing okay,
              when the academic with whom I had cosily set up house, joined the
              Foreign Office, accepted a posting to Buenos Aires and asked me to
              marry him….Reader, I did. There followed four incredible years in
              South America, during the course of which I worked – with mixed
              results – as a freelance journalist and wrote (with rather more
              success) my first two novels. Oh yes, and that’s where I had the
              first of my two wonderful sons.
            </p>
            <p>
              A career path, like a life, is a zigzagging, mercurial thing, much
              easier to make sense of in retrospect than at the time. Mine has
              had so many ups and downs it would take a memoirs to do justice to
              them. Suffice it to say that I started writing partly out of a
              sort of curiosity, just to see if I could, and partly to keep
              myself sane – in those days diplomatic wives abroad were still not
              allowed official jobs. Being a novelist dove-tailed well with
              being a mother, that was another plus.
            </p>
            <p>
              But the main thing was that I got totally hooked on the power of
              telling a story, of creating characters and letting them wend
              their way in and out of the dramas and crises that constitute the
              business of being human. It helps me make sense of the world;
              gives some shape to the million fleeting moments that matter to
              all of us, good and bad. Life whizzes so, don’t you find? Writing
              gives me the illusion that I’m catching some of it – for me, and
              for you too, I hope.
            </p>
          </div>
        )}
      </Container>
    </Page>
  )
}

AuthorPage.propTypes = {
  data: PropTypes.shape({}),
}

export default AuthorPage

export const pageQuery = graphql`
  query AuthorPageQuery {
    allMarkdownRemarkBooks: allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___originalPublicationDate]}
      filter: {frontmatter: {templateKey: {in: ["book-page"]}}}
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
          }
        }
      }
    }
  }
`
