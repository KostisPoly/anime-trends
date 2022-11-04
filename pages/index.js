import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SlideShow from '../components/SlideShow'
import MainSection from '../components/MainSection'

export default function Home(props) {

  const { upcoming, airing, seasonal } = props;
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Anime Trends</title>
        <meta name="description" content="Next spa anime trends" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SlideShow {...upcoming} />
      <MainSection {...props}/>      
    </div>
  )
}

export const getStaticProps = async () => {
  const responseUpcoming = await fetch('https://api.jikan.moe/v4/top/anime?filter=upcoming');
  const jsonUpcoming = await responseUpcoming.json();

  const responseAiring = await fetch('https://api.jikan.moe/v4/top/anime?filter=airing');
  const jsonAiring = await responseAiring.json();

  const responseSeasonal = await fetch('https://api.jikan.moe/v4/seasons/now?page=1');
  const jsonSeasonal = await responseSeasonal.json();

  return {
    props: {
      upcoming: jsonUpcoming.data,
      airing: jsonAiring.data,
      seasonal: jsonSeasonal.data
    } 
  }
}
