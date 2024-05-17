import { SingleRecord } from "../Types/types";

type Prop = {
  element: SingleRecord;
};
export const ResultTableSingleElement = ({ element }: Prop) => {
  return (
    <tr>
      <td>{element.lap}: </td>
      <td>{element.lapTime}</td>
    </tr>
  );
};
