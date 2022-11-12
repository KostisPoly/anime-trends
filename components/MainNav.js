import Link from 'next/link';
import { useEffect, useState } from 'react'
import styles from '../styles/MainNav.module.css'
import SideNav from './SideNav'

export default function MainNav() {

const [ isOpen, setIsOpen ] = useState(false);
const [ theme, setTheme ] = useState('light');

const handleClick = () => {
  setIsOpen(current => !current)
}

const toggleTheme = () => {
  setTheme(theme === 'light' ? 'dark' : 'light');
}

useEffect(() => {
  document.body.className = theme;
}, [theme])

  return (
    <div 
      id='navigation'
      className={styles.mainNav}
    >
      <SideNav {...{isOpen}}/>
      <button
        onClick={handleClick}
      >
        <div
          style={{
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)'
          }}
        ></div>
        <div
          style={{
            opacity: isOpen ? '0' : '1',
            transform: isOpen ? 'translateX(20px)' : 'translateX(0px)',
          }}
        ></div>
        <div
          style={{
            transform: isOpen ? 'rotate(-45deg)' : 'rotate(0deg)'
          }}
        ></div>
      </button>
      <Link
        href='/'
      >
        <img src='/third.png'></img>
      </Link>
      <div><input placeholder='Search'/></div>
      <div
        className={styles.toggle}
        onClick={ toggleTheme }
      >
        &#9775;
      </div>
    </div>
  )
}
