import style from "./style.module.scss";
import ElementMiddle from "./elements/elementsMiddle";

export default function NowPlayingBar() {
  return (
    <div className={style.container}>
      <div className={style.elementsLeft}></div>

      <div className={style.elementsMiddle}> <ElementMiddle/> </div>

      <div className={style.elementsRight}></div>
    </div>
  );
}
