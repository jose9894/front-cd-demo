import { useEffect, useRef } from "react";
import lobby from "../music/game-music-loop-7-145285.mp3";
import win from "../music/level-win-6416.mp3";
import loss from "../music/lose-sfx-365579.mp3";
//import { FaBan } from "react-icons/fa";

function Home() {
  const gameSoundRef = useRef(null);
  const winSoundRef = useRef(null);
  const loseSoundRef = useRef(null);

  useEffect(() => {
    gameSoundRef.current = new Audio(lobby);
    gameSoundRef.current.volume = 0.3;
    gameSoundRef.current.loop = true;
    gameSoundRef.current.play();

    winSoundRef.current = new Audio(win);
    winSoundRef.current.volume = 0.5;

    loseSoundRef.current = new Audio(loss);
    loseSoundRef.current.volume = 0.5;


    return () => {
      gameSoundRef.current.pause();
      loseSoundRef.current.pause();
      winSoundRef.current.pause();

      gameSoundRef.current = null;
      winSoundRef.current = null;
      loseSoundRef.current = null;
    };
  }, []);

  const playWin = () => winSoundRef.current.play();
  const playLoss = () => loseSoundRef.current.play();
  const pauseGameSound = () => gameSoundRef.current.pause();
  const playGameSound = () => gameSoundRef.current.play();

  return (
    <main>
      <p>Welcome to sound board</p>
      <button onClick={playWin}>Winzzz</button>
      <button onClick={playLoss}>Loss</button>
      <button onClick={pauseGameSound}><FaBan/></button>
      <button onClick={playGameSound}>Play</button>
    </main>
  );
}

export default Home;
