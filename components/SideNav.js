import styles from '../styles/SideNav.module.css'
import Link from 'next/link'

export default function SideNav() {
  return (
    <div>
      <Link href='all-anime' >ALL ANIME</Link>
      <Link href='about' >ABOUT</Link>
      <Link href='manga' >MANGA</Link>
    </div>
  )
}
