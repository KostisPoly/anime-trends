import styles from '../styles/MainNav.module.css'

export default function MainNav() {
  return (
    <div className={styles.mainNav}>
        <button>BURGER</button>
        <div>Logo</div>
        <div>Search field</div>
        <div>Dark mode checkbox</div>
    </div>
  )
}
