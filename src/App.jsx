import { useState, useEffect } from 'react'

import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import SearchResult from './components/SearchResult/SearchResult'
import TrendingMovies from './components/TrendingMovies/TrendingMovies'
import Sponsors from './components/Sponsors/Sponsors'
import Footer from './components/Footer/Footer'
import NetflixAd from './components/NetflixAd/NetflixAd'

function App() {

  // const [data, setData] = useState([])
  // const apiKey = "4c5792d4ff7ca8669330aa3950f9938e"
  // const url = "https://api.themoviedb.org/3/movie/popular"

  // const fetchInfo = async () => {
  //   const res = await fetch(url)
  //   const d = await res.json()
  //   return setData(d)
  // }

  // useEffect(() => {
  //   fetchInfo();
  // }, []);

  // console.log(data)


  return (
    <div>
      <Header />
      <Hero />
      
      <TrendingMovies />
      <NetflixAd />
      <Sponsors />
      <Footer />
      
    </div>
  )
}

export default App
