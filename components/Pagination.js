import { useState } from "react"
import styles from '../styles/Pagination.module.css'


export default function Pagination(props) {

    const { previousPage, nextPage, page } = props.pagination;
    
    return (
        <div
            className={styles.container}
        >
            <div className={styles.leftArrow} onClick ={previousPage}>
                &#171;
            </div>
            <div
                className={styles.page}
            >
                {page}
            </div>
            <div className={styles.rightArrow} onClick ={nextPage}>
                &#187;
            </div>
        </div>
    )
}
