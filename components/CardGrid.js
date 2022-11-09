import Link from "next/link";
import styles from "../styles/CardGrid.module.css";

export default function CardGrid(props) {
    
    const { initial, data } = props;
    
    const dataArray = data?.length > 0 ? data : initial;

    return (
        <div className={styles.container}>
            
            <div
                className={styles.grid}
            >
                {dataArray.map(
                    (el,index) => (
                        <Link
                            key={el.mal_id}
                            className={styles.card}
                            href='details[id]'
                            as={`details/${el.mal_id}`}
                        >
                            <img src={el.images.jpg.image_url}></img>
                        </Link>
                    )
                )}
            </div>
        </div>
    );
}
