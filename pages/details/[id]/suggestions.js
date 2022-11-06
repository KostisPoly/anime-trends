import styles from "../../../styles/Suggestions.module.css";

export default function suggestions({ data }) {
    
const dataArray = Object.values(data);
console.log(dataArray);

return (
    <div className={styles.container}>
    {dataArray.map((el, index) => (
        <div key={index} className={styles.card}>
        <img
            src={el.entry.images.webp.large_image_url}
        ></img>
        <a 
            href={el.url}
            target="_blank"
            className={styles.info}
            >
            <h3>{el.entry.title}</h3>
            <p>Jump to MyAnimeList</p>
        </a>
        </div>
    ))}
    </div>
);
}

export const getServerSideProps = async (context) => {
const response = await fetch(
    `https://api.jikan.moe/v4/anime/${context.params.id}/recommendations`
);
const json = await response.json();

return {
    props: {
    data: json.data,
    },
};
};
