import { SingleRecord } from '../Types/types'
import { formatTime } from '../Utils/TimeFormater'

type Prop = {
  element: SingleRecord
}
export const ResultTableSingleElement = ({ element }: Prop) => {
  return (
    <tr>
      <td>{element.lap}: </td>
      <td>{formatTime(element.lapTime)}</td>
    </tr>
  )
}
