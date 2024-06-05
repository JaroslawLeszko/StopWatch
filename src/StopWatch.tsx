import { useState } from 'react'
import { Btn } from './Button/Btn'
import { Counter } from './Counter/Counter'
import { SingleRecord } from './Types/types'
import { ResultTable } from './ResultsTable/ResultsTable'
import { Summary } from './Summary/Summary'

import './StopWatch.css'

export const StopWatch = () => {
  const [mode, setMode] = useState(true)
  const [actionOverall, setActionOverall] = useState<boolean | string>(false)
  const [actionLap, setActionLap] = useState<boolean | string>(false)
  const [records, setRecords] = useState<SingleRecord[]>([])

  const btnActionOverall = (att: boolean | string) => {
    if (att === false) {
      setMode(false)
    }
    setActionOverall(att)
    setActionLap(att)
    if (att === 'reset') {
      setRecords([])
    }
  }

  const addRecord = (record: number) => {
    setRecords((prevRecords) => {
      const newRecord: SingleRecord = {
        lap: prevRecords.length + 1,
        lapTime: record,
      }
      return [...prevRecords, newRecord]
    })
  }

  const btnActionLap = async (att: boolean | string) => {
    setActionLap(att)
    await addRecord
    if (actionOverall === true) setActionLap(true)
  }

  const backToCounter = () => {
    setMode(true)
    setRecords([])
  }

  return (
    <>
      <div className="app">
        {mode ? (
          <>
            <div className="totalCounter">
              <Counter callback={addRecord} counterAction={actionOverall} />
              <h3>Total time</h3>
            </div>
            <div className="lapCounter">
              <Counter callback={addRecord} counterAction={actionLap} />
              <h3>Lap time</h3>
            </div>
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
            <table>
              <ResultTable resultRecord={records} />
            </table>
          </>
        ) : (
          <>
            <Summary summary={records} />
            <button onClick={backToCounter}>Back</button>
          </>
        )}
      </div>
    </>
  )
}
