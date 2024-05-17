import { useEffect, useState } from "react";
import { formatTime } from "../Utils/TimeFormater";

type CounterAction = {
  counterAction: boolean | string;
  callback: (record: string) => void;
};

export const Counter = ({ counterAction, callback }: CounterAction) => {
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
      callback(formatTime(counter));
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

  return (
    <>
      <h1>{formatTime(counter)}</h1>
    </>
  );
};
