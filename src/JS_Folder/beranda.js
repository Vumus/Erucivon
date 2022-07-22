import '../CSS_Folder/beranda.css';
import React, { useRef, useEffect, useState } from 'react';

export default function Beranda() {
  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)
    return () => {
      window.removeEventListener('resize', changeWidth)
    } 
  }, [])
  
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }
  return (
    <nav>
      {(toggleMenu || screenWidth > 500) && (
        <ul className='list'>
        <li className='items'>Beranda</li>
        <li className='items'>Info</li>
        <li className='items'>Kontak</li>
        </ul>
      )}
      <button onClick={toggleNav} className='btn'>Lebih</button>
    </nav>
  );
}