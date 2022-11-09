import { useState } from 'react'
import styles from '../styles/LetterList.module.css'

export default function LetterList({ handleClick }) {

    const [ activeLetter, setActiveLetter ] = useState('all');

    const letters = [ 
        'all', '0-9', 'a', 'b', 'c', 'd',
            'e', 'f', 'g', 'h', 'i', 'j', 'k',
            'l', 'm', 'n', 'o', 'p', 'q', 'r',
            's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
        ];

    return (
    <div
        className={styles.container}
    >
        { letters.map( (el, index) => (
            <p
                onClick={
                    () => {
                        handleClick(letters[index])
                        setActiveLetter(letters[index])
                        }
                    }
                key={index}
                id={ letters[index] === activeLetter ? styles.active : ''}
            >{letters[index]}</p>
        ))}
    </div>
    )
}
