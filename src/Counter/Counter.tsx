import { useEffect, useState } from "react";

type CounterAction = {
  counterAction: boolean | string;
};

export const Counter = ({ counterAction }: CounterAction) => {
  const [counter, setCounter] = useState(0);
  const [isActive, setIsActive] = useState<boolean | string>(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (counterAction === "reset") {
      setIsActive(false);
      setCounter(0);
    }
    if (counterAction === "lap") {
      setCounter(0);
      setIsActive(false);
    }
    if (counterAction === true) {
      setIsActive(true);
    }
    if (counterAction === false) {
      setIsActive(false);
    }
  }, [counterAction]);

  const start = () => {
    if (isActive) {
      const id = setInterval(() => {
        setCounter((prevTime) => prevTime + 1);
      }, 100);
      setIntervalId(id as any);
    } else if (!isActive && intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
    return () => clearInterval(intervalId as any);
  };

  useEffect(() => {
    start();
  }, [isActive]);

  const formatTime = (counter: number) => {
    const totalSeconds = counter / 10;
    const integerSeconds = Math.floor(totalSeconds);
    const miliseconds = Math.round(
      ((totalSeconds - integerSeconds) * 1000) / 100
    );
    const minutes = Math.floor(integerSeconds / 60);
    const seconds = integerSeconds % 60;

    return (
      (minutes < 10 ? `0${minutes}:` : `${minutes}:`) +
      (seconds < 10 ? `0${seconds}:` : `${seconds}:`) +
      `${miliseconds}`
    );
  };

  return (
    <>
      <h1>{formatTime(counter)}</h1>
    </>
  );
};
