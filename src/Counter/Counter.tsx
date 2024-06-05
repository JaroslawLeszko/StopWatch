import { useEffect, useState, useRef } from 'react'
import { formatTime } from '../Utils/TimeFormater'

import './Counter.css'

type CounterAction = {
  counterAction: boolean | string
  callback: (record: number) => void
}

export const Counter = ({ counterAction, callback }: CounterAction) => {
  const [counter, setCounter] = useState(0)
  const [isActive, setIsActive] = useState<boolean>(false)
  const intervalId = useRef<NodeJS.Timeout | null>(null)

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
    if (isActive) {
      intervalId.current = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1)
      }, 100)
    } else if (intervalId.current) {
      clearInterval(intervalId.current)
      intervalId.current = null
    }

    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current)
      }
    }
  }, [isActive])

  return (
    <>
      <h1 className="counter">{formatTime(counter)}</h1>
    </>
  )
}
