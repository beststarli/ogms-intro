import React from 'react'
import Header from '../widgets/Header'
import Hero from '../widgets/Hero'
import SectionHeading from '../widgets/SectionHeading'
import Solutions from '../widgets/Solutions'
import HowItWorks from '../widgets/HowItWorks'
import Clients from '../widgets/Clients'
import Contact from '../widgets/Contact'
import Footer from '../widgets/Footer'

function Index() {
  return (
    <div className='container mx-auto p-4'>
        <Header/>
        <main className='mt-20'>
          <Hero />
          <section className='md:p-20'>
            <Solutions/>
          </section>
          <section className='mt-20'>
            <HowItWorks />
          </section>
          <section className='mt-20'>
            <Clients/>
          </section>
          <section>
            <Contact/>
          </section>
          <section>
            <Footer/>
          </section>
        </main>
    </div>
  )
}

export default Index