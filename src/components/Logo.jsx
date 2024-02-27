import React from 'react'
import logoImage from '../assets/logo.png';

function Logo({width = '40px'}) {
  return (
    <img src={logoImage} alt="Logo" style={{ width, backgroundColor: 'transparent' }} />
  )
}

export default Logo