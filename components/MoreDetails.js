import Link from "next/link";
import styles from "../styles/MoreDetails.module.css";
export default function MoreDetails(props) {
const dataArray = Object.values(props);

return (
    <div className={styles.container}>
    <h1>MORE DETAILS</h1>
    <Link href="characters" as={`${props.mal_id}/characters`}>
        CHARACTERS
    </Link>
    <Link href="episodes" as={`${props.mal_id}/episodes`}>
        EPISODES
    </Link>
    <Link href="suggestions" as={`${props.mal_id}/suggestions`}>
        SUGGESTIONS
    </Link>
    </div>
);
}
