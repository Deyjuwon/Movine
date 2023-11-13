import React from 'react'
import './Header.css'
import { AiOutlineSearch } from 'react-icons/ai'
// import MovieSearch from '../MovieSearch/MovieSearch'

const Header = () => {
  return (
    <header>
        <div className='left-header'>
            <p><span>Mov</span><span className='logo'>ine</span></p>
            <div className='vl'></div>
            <a href="">Discover</a>
        </div>
        <nav>
            <a  href="">Trending</a>
            <a  href="">Upcoming</a>
            <a href="">Tv Series</a>
 
            <form action="">
                <input className='search-input' type="text" placeholder='Find movie' />
                
                
            </form>
            <div className='search-icon'>
                    <AiOutlineSearch size={23} />
            </div>
        </nav>
        
    </header>
  )
}

export default Header