'use client'

import { css } from '@styled-system/css'
import React, { useEffect, useState } from 'react'

const getCurrentTime = () => {
  const localTime = new Date().toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'Europe/Brussels'
  })

  return localTime
}

export const CurrentLocalTime = () => {
  const [time, setTime] = useState<string>(() => getCurrentTime())

  useEffect(() => {
    const interval = setInterval(() => {
      const time = getCurrentTime()
      setTime(time)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <span className={css({ color: 'primary.500', fontSize: 'sm' })}>
      {time}, Brussels, BE
    </span>
  )
}

export default CurrentLocalTime
