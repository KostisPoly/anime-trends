import styles from "../styles/CardList.module.css";
import Link from "next/link";

export default function CardList(props) {
    const dataArray = Object.values(props);

    return (
        <div className={styles.container}>
        <h2>Top Airing Anime</h2>
        {dataArray.map((el, index) => (
            <Link 
                key={el.mal_id}
                href='details[id]'
                as={`details/${el.mal_id}`}
            >
                <div
                    className={styles.card}
                >
                    <h1
                        style={{color: (index < 5) ? 'yellowgreen' : '' }}
                    >{index+1}</h1>
                    <img src={el.images.jpg.small_image_url}></img>
                    <p>{el.title}</p>
                </div>
                
            </Link>
        ))}
        </div>
    );
}
