import { useState } from "react";
import CardGrid from "../../components/CardGrid";
import Pagination from "../../components/Pagination";

export default function Manga(props) {

    const { all } = props;

    const [ dataArray, setdataArray ] = useState([]);
    const [ page, setPage ] = useState(1);

    const previousPage = async () => {
        if( page > 2 ) {
            const response = await fetch(`https://api.jikan.moe/v4/top/manga?page=${page-1}&type=start`);
            const json = await response.json();
            setdataArray(Object.values(json.data));
            setPage(page - 1);
        } else if( page === 2 ) {
            setdataArray(seasonal);
            setPage(page - 1);
        }
        
    }

    const nextPage = async () => {
        const response = await fetch(`https://api.jikan.moe/v4/manga?page=${page+1}&type=start`);
        const json = await response.json();
        setdataArray(Object.values(json.data));
        setPage(page + 1);
    }

    return (
        <div>
            <CardGrid initial={all} data={dataArray}/>
            <Pagination 
                pagination={{ previousPage, nextPage, page }}
            />
        </div>
    )
}

export const getStaticProps = async () => {
    const responseAll = await fetch(
        "https://api.jikan.moe/v4/top/manga?page=1&type=start"
    );
    const jsonAll = await responseAll.json();

    return {
        props: {
        all: jsonAll.data,
        },
    };
};
