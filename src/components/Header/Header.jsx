import React from 'react'
import './Header.css'
import { AiOutlineSearch } from 'react-icons/ai'
// import MovieSearch from '../MovieSearch/MovieSearch'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div className='left-header'>
            <Link className='nav1' to='./'><span>Mov</span><span className='logo'>ine</span></Link>
            <div className='vl'></div>
            <NavLink className='nav1' to='./Discover' href="">Discover</NavLink>
        </div>
        <nav>
            <NavLink className='nav1' to="./Trending">Trending</NavLink>
            <NavLink className='nav1' to="./Upcoming"  href="">Upcoming</NavLink>
            <NavLink className='nav1' href="">Tv Series</NavLink>
 
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