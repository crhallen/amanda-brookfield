import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import styled from 'styled-components'

const LongContent = styled.div`
  height: 2000px;
  width: 100px;
  background: deepskyblue;
`
const BannerImage = styled.img`
  width: 100%;
  height: auto;
`

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div>Header</div>
        <div>
          <BannerImage src="//picsum.photos/200/300/" />
        </div>
        <div>
          Welcome to my official website. There’s lots o to dip into, with
          sneak-peeks at my inspirations as well as information about all my
          fifteen best-sellers, including Alice Alone, Relative Love and Life
          Begins.
        </div>
        <LongContent />
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({}),
}
