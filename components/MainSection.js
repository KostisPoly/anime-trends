import { useState } from "react";
import styles from "../styles/MainSection.module.css";
import CardGrid from "./CardGrid";
import CardList from "./CardList";
import Pagination from "./Pagination";

export default function MainSection(props) {

    const { seasonal, airing} = props;
    const [page, setPage] = useState(1);
    const [ dataArray, setdataArray ] = useState([]);

    const previousPage = async () => {
        if( page > 2 ) {
            const response = await fetch(`https://api.jikan.moe/v4/anime?letter=&page=${page-1}`);
            const json = await response.json();
            setdataArray(Object.values(json.data));
            setPage(page - 1);
        } else if( page === 2 ) {
            setdataArray(seasonal);
            setPage(page - 1);
        }
        
    }

    const nextPage = async () => {
        const response = await fetch(`https://api.jikan.moe/v4/anime?letter=&page=${page+1}`);
        const json = await response.json();
        setdataArray(Object.values(json.data));
        setPage(page + 1);
    }

    return (
        <div className={styles.main}>
            <div
                className={styles.mainSection}
            >
                <div
                className={styles.top}
            >
                <h2>Seasonal Anime</h2>
            </div>
            <CardGrid 
                initial={seasonal} 
                data={dataArray}
            />
            <Pagination 
                pagination={{ previousPage, nextPage, page }}
            />
            </div>
            <CardList {...airing} />
        </div>
    );
}
