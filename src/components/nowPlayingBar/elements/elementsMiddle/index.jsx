import AudioPlayer from "../../../audioPlayer";
import style from "./style.module.scss";

export default function ElementMiddle() {
  return (
    <div className={style.container}>
      
      <AudioPlayer></AudioPlayer>
    </div>
  );
}
