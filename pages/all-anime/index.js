import { useState } from "react";
import CardGrid from "../../components/CardGrid";
import LetterList from "../../components/LetterList";

export default function AllAnime(props) {

    const { all } = props;

    const [ dataArray, setdataArray ] = useState([]);

    const clickLetter = async (letter) => {
        let response;
        if ( letter === 'all') {
            response = await fetch(`https://api.jikan.moe/v4/anime?letter=&page=1`);
        } else if(letter === '0-9') {
            response = await fetch(`https://api.jikan.moe/v4/anime?letter=.&page=1`);
        } else {
            response = await fetch(`https://api.jikan.moe/v4/anime?letter=${letter}&page=1`);
        }
        
        const json = await response.json();
        setdataArray(Object.values(json.data));
    }

    return (
        <div>
        <LetterList handleClick={clickLetter}/>
        <CardGrid initial={all} data={dataArray}/>
        </div>
    );
}

export const getStaticProps = async () => {
    const responseAll = await fetch(
        "https://api.jikan.moe/v4/anime?letter=&page=1"
    );
    const jsonAll = await responseAll.json();

    return {
        props: {
        all: jsonAll.data,
        },
    };
};
