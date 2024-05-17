import { SingleRecord } from "../Types/types";
import { formatTime } from "../Utils/TimeFormater";

type SummaryProp = {
  summary: SingleRecord[];
};
export const Summary = ({ summary }: SummaryProp) => {
  const totalTime = summary.reduce((prev, curr) => prev + curr.lapTime, 0);
  const avrageTime = totalTime / summary.length;
  const laps = summary.map((lap) => lap.lapTime);
  const bestLap = Math.min(...laps);
  const worstLap = Math.max(...laps);

  return (
    <>
      <p>Total laps: {summary.length}</p>
      <p>Total time: {formatTime(totalTime)}</p>
      <p>Avrage lap time: {formatTime(avrageTime)}</p>
      <p>Best lap time: {formatTime(bestLap)}</p>
      <p>Worst lap time: {formatTime(worstLap)}</p>
    </>
  );
};
