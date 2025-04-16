import React from 'react'
import "./Home.css"
import Card from '../Card/Card'
import Footer from '../Footer/Footer'
import Hero from '../Hero/Hero'
import Dynamic from '../Dynamic/StatsCounter'
import Work from '../Works/Work'
import Gadi from '../Gadi/Gadi'
import Khana from '../Khana/Khana'
import Local from '../Local/Local'
import Experience from '../Experience/Experience'
// import Listing from '../Listing/Listing'

const Home = () => {
  
  return (
    <div id='Home'>
<Hero/>

<Card/>
 {/* <Hero/>  */}
 <Dynamic/>
 <Work/>
 <Khana/>
<Gadi/>
<Local/>
<Experience/>
<Footer/>

    </div>
  )
}

export default Home