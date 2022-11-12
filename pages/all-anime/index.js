import { useState } from "react";
import CardGrid from "../../components/CardGrid";
import LetterList from "../../components/LetterList";
import Pagination from "../../components/Pagination";

export default function AllAnime(props) {

    const { all } = props;

    const [ dataArray, setdataArray ] = useState([]);
    const [ page, setPage ] = useState(1);
    const [ letter, setLetter ] = useState('');

    const clickLetter = async (letter) => {
        let response;
        if ( letter === 'all') {
            response = await fetch(`https://api.jikan.moe/v4/anime?letter=&page=1`);
            setLetter('');
        } else if(letter === '0-9') {
            response = await fetch(`https://api.jikan.moe/v4/anime?letter=.&page=1`);
            setLetter('.');
        } else {
            response = await fetch(`https://api.jikan.moe/v4/anime?letter=${letter}&page=1`);
            setLetter(letter);
        }
        
        const json = await response.json();
        setdataArray(Object.values(json.data));
    }

    const previousPage = async () => {
        if( page > 2 ) {
            const response = await fetch(`https://api.jikan.moe/v4/anime?letter=${letter}&page=${page-1}`);
            const json = await response.json();
            setdataArray(Object.values(json.data));
            setPage(page - 1);
        } else if( page === 2 ) {
            setdataArray(seasonal);
            setPage(page - 1);
        }
        
    }

    const nextPage = async () => {
        const response = await fetch(`https://api.jikan.moe/v4/anime?letter=${letter}&page=${page+1}`);
        const json = await response.json();
        setdataArray(Object.values(json.data));
        setPage(page + 1);
    }

    return (
        <div>
        <LetterList handleClick={clickLetter}/>
        <CardGrid initial={all} data={dataArray}/>
        <Pagination 
            pagination={{ previousPage, nextPage, page }}
        />
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
