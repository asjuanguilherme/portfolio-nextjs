'use client'

import { css } from '@styled-system/css'
import { useState, useEffect } from 'react'

export type StatNumberProps = {
  number: number
  label: string
  prefix?: string
}

export const StatNumber = ({ number, label, prefix }: StatNumberProps) => {
  const [currentCount, setCurrentCount] = useState(Math.floor(number / 2))

  if (!number) {
    throw new Error('StatNumber: You should define a number.')
  }

  useEffect(() => {
    if (currentCount === number) return

    const duration = 300 // in ms
    const start = currentCount
    const end = number
    const range = end - start
    const incrementTime = duration / range

    const interval = setInterval(() => {
      setCurrentCount(state => state + 1)

      if (currentCount === end) {
        clearInterval(interval)
      }
    }, incrementTime)

    return () => clearInterval(interval)
  }, [currentCount, number, setCurrentCount])

  return (
    <div
      className={css({
        width: '100%',
        d: 'flex',
        flexDir: 'column',
        fontWeight: 'medium'
      })}
    >
      <span className={css({ fontSize: '3xl' })}>
        {prefix}
        {currentCount}
      </span>
      <span>{label}</span>
    </div>
  )
}

export default StatNumber
