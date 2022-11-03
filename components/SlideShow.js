import { useEffect,useState } from "react";
import styles from "../styles/SlideShow.module.css"
import ImageSlider from "./ImageSlider"

export default function SlideShow() {

    const [ upcoming, setUpcoming ]  = useState([]);

    useEffect(() => {
        async function fetchUpcoming() {
            const response = await fetch('https://api.jikan.moe/v4/top/anime?filter=upcoming');
            const json = await response.json();
            setUpcoming(json.data);
        }
        fetchUpcoming();
    },[])
    
    if(upcoming !== []) {
        return (
            <div className={styles.slideContainer}>
                <h2>Top Upcomming</h2>
                <ImageSlider {...upcoming}/>
            </div>
    
        )
    }
    
    return <div>LOADING......</div>
}
