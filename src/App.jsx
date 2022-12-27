import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/Nav'
import About from './components/about/about'
import Experiance from './components/experiance/experiance'
import Portfolio from './components/portfolio/portfolio'
import Contacts from './components/contacts/Contacts'
import Footer from './components/footer/footer'

const App = () => {
  return (
  <>
    <Header />
    <Nav />
    <About />
    <Experiance />
    <Portfolio />
    <Contacts />
    <Footer />
  </>
  )
}

export default App