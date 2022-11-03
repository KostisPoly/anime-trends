import { useEffect, useState } from "react";
import styles from "../styles/MainSection.module.css";
import CardGrid from "./CardGrid";
import CardList from "./CardList";

export default function MainSection() {
    
    const [ topAiring, setTopAiring ]  = useState([]);
    const [ seasonal, setSeasonal ]  = useState([]);

    useEffect(() => {
        async function fetchTopAiring() {
            const response = await fetch(
            "https://api.jikan.moe/v4/top/anime?filter=airing"
            );
            const json = await response.json();
            setTopAiring(json.data);
        }
        fetchTopAiring();
        async function fetchSeasonal() {
            const response = await fetch(
            "https://api.jikan.moe/v4/seasons/now?page=1"
            );
            const json = await response.json();
            setSeasonal(json.data);
        }
        fetchSeasonal();
    },[])
    

    return (
        <div className={styles.main}>
            <CardGrid {...seasonal}/>
            <CardList {...topAiring} />
        </div>
    );
}
