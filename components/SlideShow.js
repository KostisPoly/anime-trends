import { useEffect,useState } from "react";
import styles from "../styles/SlideShow.module.css"
import ImageSlider from "./ImageSlider"

export default function SlideShow(props) {
    
    if(props) {
        return (
            <div
                id='slider'
                className={styles.slideContainer}
            >
                <h2>Top Upcomming</h2>
                <ImageSlider {...props}/>
            </div>
    
        )
    }
    
    return <div>LOADING......</div>
}
