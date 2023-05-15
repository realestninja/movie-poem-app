import { useState, useEffect } from 'react';
import './styles/loadingBar.css'

const arrayOfSillyReasons = [
  "Renting it online",
  "Watching it (super speed with subtitles)",
  "Writing the poem",
];

const pickReason = timing => {
  if (timing > 6) return arrayOfSillyReasons[0];
  if (timing > 3) return arrayOfSillyReasons[1];
  return arrayOfSillyReasons[2];
}

const LoadingBar = () => {
  const [count, setCount] = useState(8);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(count - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div className="loading-wrapper">
      <div>The AI is working hard!</div>
      <div className="loading-bar">
        <div className="loading-bar-inner"></div>
      </div>
      <div className="silly-reasons">{pickReason(count)}</div>
    </div>
  );
};

export default LoadingBar;
