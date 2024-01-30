import styles from "./css/home.module.scss";
import LeftSidebar from "./components/leftSidebar";
import NowPlayingBar from "./components/nowPlayingBar";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.leftSidebar}>
          <LeftSidebar />
        </div>

        <div className={styles.nowPlayingBar}>
          <NowPlayingBar />
        </div>
      </div>
    </div>
  );
}
