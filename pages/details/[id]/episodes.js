import styles from "../../../styles/Episodes.module.css";

export default function episodes({ data }) {

  const dataArray = Object.values(data);

  return (
    <div
      className={styles.container}
    >
      {dataArray.map( (el, index) => (
        <div
          key={index}
          className={styles.card}
        >
          <h3>{el.title}</h3>
          <p>Airing: {el.aired}</p>
          <a
            href={el.forum_url}
            target="_blank"
          >Jump to MyAnimeList</a>
          <p>&#10026; Score: {el.score}</p>
        </div>
      ))}
    </div>
  )
}

export const getServerSideProps = async (context) => {
  
  const response = await fetch(`https://api.jikan.moe/v4/anime/${context.params.id}/episodes`);
  const json = await response.json();

  return {
      props: {
          data: json.data
      }
  }
  
}
