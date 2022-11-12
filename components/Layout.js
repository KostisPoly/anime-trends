import styles from "../styles/Layout.module.css";
import MainNav from "./MainNav";
import Image from "next/image";


export default function Layout({ children }) {
  return (
    <div
      id='layout'
    >
      <MainNav />
      <main
        className={styles.main}
        id='main'
      >
        {children}
      </main>
      
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
        <a
          href="https://jikan.moe/"
          target="_blank"
          rel="noopener noreferrer"
        >
          And{' '}
          <span className={styles.jikan}>
          &copy; Jikan API
          </span>
        </a>
      </footer>
    </div>
  );
}
