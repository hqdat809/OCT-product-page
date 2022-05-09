import React from 'react'
import Logo from './Logo'
import MidHeader from './MidHeader'
import RightHeader from './RightHeader'
import './Header.scss'

function Header() {
  return (
    <div className='wrapper-header'>
      <Logo />
      <MidHeader />
      <RightHeader />
    </div>
  )
}

export default Header
