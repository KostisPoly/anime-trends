import { useEffect, useState } from "react";
import styles from "../styles/MainSection.module.css";
import CardGrid from "./CardGrid";
import CardList from "./CardList";

export default function MainSection(props) {

    const { seasonal, airing} = props;

    return (
        <div className={styles.main}>
            <div
                className={styles.mainSection}
            >
                <div
                className={styles.top}
            >
                <h2>Seasonal Anime</h2>
                <div>&#171;</div>
                <div>&#187;</div>
            </div>
            <CardGrid initial={seasonal}/>
            </div>
            <CardList {...airing} />
        </div>
    );
}
