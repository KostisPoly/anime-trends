import React, { useState } from 'react'
import styles from "../styles/ImageSlider.module.css"

export default function ImageSlider(props) {

    const dataArray = Object.values(props);
    const [ currentIndex, setCurrentIndex ]  = useState(0);
    const countSlides = dataArray.length;
    
    const previousSlide = () => {
        if( ! (currentIndex < 1) ) {
            setCurrentIndex(currentIndex-1);
        }
        
    }
    
    const nextSlide = () => {
        if( ! (currentIndex >= countSlides -1) ) {
            setCurrentIndex(currentIndex+1);
        }
        
    }

  return (
    <div>
        <div
            className={styles.leftArrow}
            onClick={previousSlide}
        >&#171;</div>
        {dataArray.map(
            (el, index) => (
                <div
                    key={el.mal_id}
                    className={currentIndex === index ? styles.card : styles.hide}
                >
                    <img src={el.images.jpg.large_image_url}></img>
                    <div
                        className={styles.details}
                    >
                        <h1>{el.title}</h1>
                        <h3>English Title - {el.title_english}</h3>
                        <p>Synopsis - "{el.synopsis}"</p>
                    </div>
                    
                    
                </div>
            )
        )}
        <div
            className={styles.rightArrow}
            onClick={nextSlide}
        >&#187;</div>
    </div>
  )
}
