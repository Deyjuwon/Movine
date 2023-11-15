import React from 'react'
import Hero from '../components/Hero/Hero'
import SearchResult from '../components/SearchResult/SearchResult'
import TrendingMovies from '../components/TrendingMovies/TrendingMovies'
import Sponsors from '../components/Sponsors/Sponsors'
import Footer from '../components/Footer/Footer'
import NetflixAd from '../components/NetflixAd/NetflixAd'
import Upcoming from '../components/Upcoming/Upcoming'

const Home = () => {
  return (
    <div>
        <Hero />
        
        
        <TrendingMovies />
        <Upcoming />
        <NetflixAd />
        <Sponsors />
        <Footer />
    </div>
  )
}

export default Home