import { useState } from "react";
import { Btn } from "./Button/Btn";
import { Counter } from "./Counter/Counter";

export const StopWatch = () => {
  const [actionOverall, setActionOverall] = useState<boolean | string>(false);
  const [actionLap, setActionLap] = useState<boolean | string>(false);

  const btnActionOverall = (att: boolean | string) => {
    setActionOverall(att);
    setActionLap(att);
  };

  const btnActionLap = async (att: boolean | string) => {
    setActionLap(att);
    await console.log("Result");
    if (actionOverall === true) setActionLap(true);
  };

  return (
    <>
      <Counter counterAction={actionOverall} />
      <Counter counterAction={actionLap} />
      <Btn
        callback={btnActionOverall}
        name="Start"
        type={true}
        backgroundColor="green"
      />
      <Btn
        callback={btnActionOverall}
        name="Stop"
        type={false}
        backgroundColor="yellow"
      />
      <Btn
        callback={btnActionOverall}
        name="Reset"
        type="reset"
        backgroundColor="red"
      />
      <Btn
        callback={btnActionLap}
        name="Lap"
        type="lap"
        backgroundColor="blue"
      />
    </>
  );
};
