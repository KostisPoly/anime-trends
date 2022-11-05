import styles from "../../../styles/Characters.module.css";
export default function characters({ data }) {
  
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
          <h3>{el.character.name}</h3>
          <p>{el.role}</p>
          <img src={el.character.images.webp.image_url}></img>
        </div>
      ))}
    </div>
  )
}


export const getServerSideProps = async (context) => {
  
  const response = await fetch(`https://api.jikan.moe/v4/anime/${context.params.id}/characters`);
  const json = await response.json();

  return {
      props: {
          data: json.data
      }
  }
  
}