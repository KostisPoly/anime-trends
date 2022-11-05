import styles from "../styles/CardGrid.module.css";

export default function CardGrid(props) {
    
    const dataArray = Object.values(props);

    return (
        <div className={styles.container}>
            <div
                className={styles.top}
            >
                <h2>Seasonal Anime</h2>
                <div>&#171;</div>
                <div>&#187;</div>
            </div>
            
            <div
                className={styles.grid}
            >
                {dataArray.map(
                    (el,index) => (
                        <div
                            key={el.mal_id}
                            className={styles.card}
                        >
                            <img src={el.images.jpg.image_url}></img>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}
