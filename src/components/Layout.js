import React from 'react'
import {Helmet} from 'react-helmet'
import styled, {ThemeProvider} from 'styled-components'

import '../fontAwesome'
import GlobalStyles from '../styles/globalStyles'
import theme from '../styles/theme.js'

import PreloadFonts from './PreloadFonts'
import Nav from './organisms/Nav'
import Header from './molecules/Header'
import Footer from './organisms/Footer'
import Announcement from './molecules/Announcement'
import favicon16 from '../img/favicons/favicon-16x16.png'
import favicon32 from '../img/favicons/favicon-32x32.png'
import favicon64 from '../img/favicons/favicon-64x64.png'

const LayoutGrid = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  min-height: 100vh;
  & > * {
    width: 100vw;
  }
`
const Layout = ({cms, children}) => (
  <ThemeProvider theme={theme}>
    <>
      <Helmet>
        <title>Amanda Brookfield | Best-Selling Novelist</title>
        <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
        <link rel="shortcut icon" type="image/png" href={favicon64} />
      </Helmet>
      <GlobalStyles />
      <PreloadFonts />
      <LayoutGrid>
        <Header />
        <Nav />
        <div>{children}</div>
        <Footer />
      </LayoutGrid>
      {!cms && <Announcement />}
    </>
  </ThemeProvider>
)

export default Layout
