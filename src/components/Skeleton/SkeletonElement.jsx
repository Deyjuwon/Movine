import React from 'react'
import './SkeletonElement.css'
import Shimmer from './Shimmer'

const SkeletonElement = () => {
  return (
    <div className='skeleton-container'>
        <div className="skeleton-card">
            <div className='skeleton-text'>
                <h2></h2>
                <p></p>
                <p></p>
            </div>
        </div>
        <Shimmer />
    </div>
  )
}

export default SkeletonElement