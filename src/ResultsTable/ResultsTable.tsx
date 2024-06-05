import { SingleRecord } from '../Types/types'
import { ResultTableSingleElement } from './ResultsTableSingleElement'

type ResultProp = {
  resultRecord: SingleRecord[]
}

export const ResultTable = ({ resultRecord }: ResultProp) => {
  return (
    <tbody>
      {resultRecord.map((result) => (
        <ResultTableSingleElement key={result.lap} element={result} />
      ))}
    </tbody>
  )
}
