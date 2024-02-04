import { useState, useRef, useEffect } from "react";
import { api } from "../../lib/api";

export default function AudioPlayer() {
  const [playlist, setPlaylist] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [historySongs, setHistorySongs] = useState([]);
  const audioRef = useRef();
  var songIndex = currentSongIndex;

  useEffect(() => {
    console.log("1");
    api.get('/').then(res => console.log(res))
    console.log("2");
  }, []);

  const playPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
      console.log("pause");
    } else {
      audioRef.current.play();
      console.log("play");
    }
    setIsPlaying(!isPlaying);
  };

  const playNext = () => {
    songIndex = currentSongIndex + 1;
    if (songIndex >= playlist.length) {
      songIndex = 0;
    }
    setCurrentSongIndex(songIndex);
    console.log("Proxima");

    setHistorySongs((prevHistorySongs) => [
      ...prevHistorySongs,
      playlist[currentSongIndex].id,
    ]);
  };

  const playBack = () => {
    if (audioRef.current.currentTime <= 2 && historySongs.length > 1) {
      const prevSongId = historySongs.pop();

      setHistorySongs(historySongs);
      setCurrentSongIndex(playlist.findIndex((p) => p.id === prevSongId));

      audioRef.current.currentTime = 0;
      return;
    } else {
      audioRef.current.currentTime = 0;
    }
    if (songIndex < 0) {
      songIndex = 0;
      audioRef.current.currentTime = 0;
    }
    setCurrentSongIndex(songIndex);
    console.log("Anterior");
  };

  const random = () => {
    let randomize = Math.floor(Math.random() * playlist.length);
    console.log(randomize);
  };

  useEffect(() => {
    audioRef.current.play();
    setIsPlaying(true);
  }, [currentSongIndex]);

  return (
    <>
      <button onClick={playPause}>play/pause</button>
      <button onClick={playNext}>avançar</button>
      <button onClick={playBack}>retroceder</button>
      <button onClick={random}>Randomizar</button>

      <audio controls ref={audioRef} key={currentSongIndex} onEnded={playNext}>
        <source src={playlist[currentSongIndex]?.src} type="audio/mpeg" />
      </audio>
    </>
  );
}
