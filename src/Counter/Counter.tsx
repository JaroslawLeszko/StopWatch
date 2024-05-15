import { useEffect, useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formatTime = (counter: number) => {
    const totalSeconds = counter / 10;
    const integerSeconds = Math.floor(totalSeconds);
    const miliseconds = Math.round((totalSeconds - integerSeconds) * 1000);
    const minutes = Math.floor(integerSeconds / 60);
    const seconds = integerSeconds % 60;
    if (minutes < 10 && seconds < 10) {
      return `0${minutes}:0${seconds}:${miliseconds}`;
    } else {
      return `${minutes}:${seconds}:${miliseconds}`;
    }
  };

  return <h1>{formatTime(counter)}</h1>;
};
