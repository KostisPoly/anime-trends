import styles from '../styles/SideNav.module.css'
import Link from 'next/link'

export default function SideNav(props) {

  const { isOpen } = props;
  
  const toggleClass = isOpen ? styles.open : styles.closed;

  return (
    <div
    className={[styles.container, toggleClass].join(' ')}
    >
      <Link href='/all-anime' >ALL ANIME</Link>
      <Link href='/manga' >MANGA</Link>
      <Link href='/about' >ABOUT</Link>
    </div>
  )
}
