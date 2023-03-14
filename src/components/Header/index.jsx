import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='text-center my-3'>
      <Link to='/' className='text-blue-400 text-center text-5xl text-bold'>
        <a className=''>Code<span className='text-blue-600'>Workouts</span></a>
      </Link>
    </header>
  )
}

export default Header
