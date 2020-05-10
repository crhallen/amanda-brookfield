import React from 'react'
import {graphql} from 'gatsby'
import styled from 'styled-components'

import SubTitle from '../components/atoms/SubTitle'
import Page from '../components/atoms/Page'
import H3 from '../components/atoms/H3'
import Container from '../components/atoms/Container'
import MobileSketchHeading from '../components/molecules/MobileSketchHeading'
import HelmetHelper from '../components/molecules/HelmetHelper'

const Event = styled.div`
  margin-bottom: 24px;
  &:last-child {
    margin-bottom: 0;
  }
`

export const EventsPageTemplate = ({events}) => {
  return (
    <Page>
      <HelmetHelper
        title="Events"
        metaDescription="Get up-to-date news of my latest book events and public appearances. Come and meet me and my amazing dog, Mabel, for signings of my new memoir bestseller ‘For the Love of a Dog.’"
      />
      <Container narrow>
        <MobileSketchHeading title="Events" sketchType="events" />
        {events && events.length
          ? events.map(event => (
              <Event key={event.title}>
                <H3>{event.title}</H3>
                <SubTitle css={'margin: 8px 0;'}>
                  {new Date(event.date).toLocaleDateString('default', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: '2-digit',
                  })}
                  {event.time && `, ${event.time}`}
                </SubTitle>
                <div>{event.description}</div>
              </Event>
            ))
          : 'No events planned at the moment, check back later'}
      </Container>
    </Page>
  )
}

const EventsPage = ({data}) => {
  const {markdownRemark: post} = data

  return <EventsPageTemplate events={post.frontmatter.events} />
}

export default EventsPage

export const eventPageQuery = graphql`
  query EventsPage($id: String!) {
    markdownRemark(id: {eq: $id}) {
      html
      frontmatter {
        events {
          title
          date
          time
          description
        }
      }
    }
  }
`
