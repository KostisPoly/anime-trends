import styles from "../styles/Layout.module.css";
import MainNav from "./MainNav";
import SlideShow from "./SlideShow";

export default function Layout({ children }) {
  return (
    <div>
      <MainNav />
      <SlideShow />
    </div>
  );
}
