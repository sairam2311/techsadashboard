import React from 'react'
import './header.css'
import Logo from './Logo'
import logo1 from './logol'
import SearchBar from './SearchBar'
import Nav from './Nav'

function Header() {
  return (
    <header id='header' className='header fixed-top d-flex align-items-center'>
        <Logo/>
        {/* <logo1 />
      <h1 className="app-title mx-3">Telangana State Geo Dashboard</h1>
      <logo1 /> */}
      <SearchBar/>
        <Nav/>
    </header>
  )
}

export default Header