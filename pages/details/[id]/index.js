import styles from "../../../styles/Details.module.css"
import MoreDetails from "../../../components/MoreDetails";

export default function Details({ data }) {

    const headStyle = {
        backgroundImage: `url(${data.images.jpg.large_image_url})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxShadow: 'inset 0 -100px 120px rgb(0 0 0 / 80%)',
        height: '70vh',
        width: '100%'
    }
    
    return (
        <div
            className={styles.container}
        >
            <div
                style={headStyle}
            >

            </div>
            <div
                className={styles.main}
            >
                <div
                    className={styles.card}
                >
                    <img
                        src={data.images.webp.image_url}
                    ></img>
                    <p>&#10026; Score: {data.score}</p>
                    <p>&#9787; Votes: {data.scored_by}</p>
                    <a 
                        href={data.url}
                        target="_blank"
                    >Jump to MyAnimeList</a>
                </div>
                <div
                    className={styles.info}
                >
                    <h1>{data.title}</h1>
                    
                    <div
                        className={styles.subhead}
                    >
                        <p>Rank: &#9839;{data.rank}</p>
                        <p>Popularity: &#9829;{data.popularity}</p>
                        <p>Status: {data.status}</p>
                        <p>Year: {data.year}</p>
                    </div>
                    <h4>Synopsis</h4>
                    <p>{data.synopsis}</p>
                </div>
            </div>
            <div
                className={styles.trailer}
            >
                <iframe width='500px' height='345px' src={data.trailer.embed_url}></iframe>
            </div>
            <MoreDetails {...data}/>
        </div>
    )
}

export const getServerSideProps = async (context) => {
    
    const response = await fetch(`https://api.jikan.moe/v4/anime/${context.params.id}`);
    const json = await response.json();

    return {
        props: {
            data: json.data
        }
    }
}
