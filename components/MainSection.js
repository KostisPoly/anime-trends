import { useEffect, useState } from "react";
import styles from "../styles/MainSection.module.css";
import CardGrid from "./CardGrid";
import CardList from "./CardList";

export default function MainSection(props) {

    const { seasonal, airing} = props;

    return (
        <div className={styles.main}>
            <CardGrid {...seasonal}/>
            <CardList {...airing} />
        </div>
    );
}
