import { useState, useEffect } from 'react'

import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import SearchResult from './components/SearchResult/SearchResult'

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
      
    </div>
  )
}

export default App
