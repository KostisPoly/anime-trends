import styles from "../styles/Layout.module.css";
import MainNav from "./MainNav";
import MainSection from "./MainSection";
import SlideShow from "./SlideShow";


export default function Layout({ children }) {
  return (
    <div>
      <MainNav />
      <SlideShow />
      <MainSection />
    </div>
  );
}
