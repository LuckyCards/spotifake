import style from "./style.module.scss";
import { House, List, MagnifyingGlass, Stack } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import ShowItems from "./showItems.jsx";

import data from "../../../public/perfil.json";

export default function LeftSidebar() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data);
  });

  return (
    <nav className={style.container}>
      <div className={style.navAside}>
        <ul>
          <li className={style.home}>
            <House size={28} className={style.buttonIcon} />
          </li>
          <li className={style.search}>
            <MagnifyingGlass size={28} className={style.buttonIcon} />
          </li>
        </ul>
      </div>

      <div className={style.libraryAside}>
        <button className={style.library}>
          <List size={28} className={style.buttonIcon} />
        </button>

        <section>
          <ul>
            <li className={style.likeSongs}>
              <img
                className={style.buttonImg}
                src="https://misc.scdn.co/liked-songs/liked-songs-300.png"
              />
            </li>

            {items.map((e, i) => (
              <ShowItems data={e} key={i} />
            ))}
          </ul>
        </section>
      </div>
    </nav>
  );
}
