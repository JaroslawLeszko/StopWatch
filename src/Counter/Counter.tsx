import { useEffect, useState } from 'react'
import { formatTime } from '../Utils/TimeFormater'

import './Counter.css'

type CounterAction = {
  counterAction: boolean | string
  callback: (record: number) => void
}

export const Counter = ({ counterAction, callback }: CounterAction) => {
  const [counter, setCounter] = useState(0)
  const [isActive, setIsActive] = useState<boolean>(false)
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (counterAction === 'reset') {
      setIsActive(false)
      setCounter(0)
    }
    if (counterAction === 'lap') {
      setCounter(0)
      setIsActive(false)
      callback(counter)
    }
    if (counterAction === true) {
      setIsActive(true)
    }
    if (counterAction === false) {
      setIsActive(false)
    }
  }, [counterAction, counter, callback])

  useEffect(() => {
    const start = () => {
      if (isActive) {
        const id = setInterval(() => {
          setCounter((prevTime) => prevTime + 1)
        }, 100)
        setIntervalId(id)
      } else if (!isActive && intervalId) {
        clearInterval(intervalId)
        setIntervalId(null)
      }
      // if (intervalId) return () => clearInterval(intervalId)
    }

    start()
  }, [isActive, intervalId])

  return (
    <>
      <h1 className="counter">{formatTime(counter)}</h1>
    </>
  )
}
