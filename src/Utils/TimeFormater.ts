export const formatTime = (counter: number) => {
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
