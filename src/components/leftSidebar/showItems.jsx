import style from "./style.module.scss";

export default function ShowItems({ data }) {
  const itemStyle = data.type === "Artista" ? style.artist : "";
  return (
    <li className={itemStyle}>
      <img className={style.buttonImg} src={data.img} />
    </li>
  );
}
