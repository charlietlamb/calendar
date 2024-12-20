'use client'

import { useState } from 'react'
import Calendar from './calendar/calendar'
import { CalendarEvent, Mode } from './calendar/calendar-types'

export default function CalendarDemo() {
  const [events, setEvents] = useState<CalendarEvent[]>([])
  const [mode, setMode] = useState<Mode>('day')
  const [date, setDate] = useState<Date>(new Date())

  return (
    <Calendar
      events={events}
      setEvents={setEvents}
      mode={mode}
      setMode={setMode}
      date={date}
      setDate={setDate}
    />
  )
}
