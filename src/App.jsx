import './App.css'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Trending from './pages/Trending'
import Home from './pages/Home'
import UpcomingMovies from './pages/UpcomingMovies'
import Discover from './pages/Discover'
 
function App() {

  return (
    <div>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Trending' element={<Trending />} />
          <Route path='/Upcoming' element={<UpcomingMovies />} />
          <Route path='/Discover' element={<Discover />} />
          
        </Routes>
  
      
      
    </div>
  )
}

export default App
