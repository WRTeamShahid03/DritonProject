import React from 'react'
import HeroSect from './HeroSect'
import Features from './Features.jsx'
// import CommonSection1 from '../CommonSection1'
import About from './About'
import Header from './Header'
import Platform from './Platform'
import Payments from './Payments'
import FAQ from './FAQ'
import ContactUs from './ContactUs'
import Footer from './Footer'

const Home = () => {
  return (
    
    <body className='web'>

      <Header />
      
      <HeroSect />

      <Features />

      <About />

      <Platform />

      <Payments />

      <FAQ />

      <ContactUs />

      <Footer/>

    </body>
  )
}

export default Home;
