import styles from "../styles/CardList.module.css";

export default function CardList(props) {
    const dataArray = Object.values(props);

    console.log(dataArray);
    return (
        <div className={styles.container}>
        <h2>Top Airing Anime</h2>
        {dataArray.map((el, index) => (
            <a key={el.mal_id}>
                <div
                    className={styles.card}
                >
                    <h1>{index+1}</h1>
                    <img src={el.images.jpg.small_image_url}></img>
                    <p>{el.title}</p>
                </div>
                
            </a>
        ))}
        </div>
    );
}
