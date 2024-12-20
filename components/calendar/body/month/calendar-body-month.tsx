import { useCalendarContext } from '../../calendar-context'
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  format,
} from 'date-fns'
import { cn } from '@/lib/utils'
import CalendarEvent from '../../calendar-event'

export default function CalendarBodyMonth() {
  const { date, events, setDate, setMode } = useCalendarContext()

  // Get the first day of the month
  const monthStart = startOfMonth(date)
  // Get the last day of the month
  const monthEnd = endOfMonth(date)

  // Get the first Monday of the first week (may be in previous month)
  const calendarStart = startOfWeek(monthStart, { weekStartsOn: 1 })
  // Get the last Sunday of the last week (may be in next month)
  const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 1 })

  // Get all days between start and end
  const calendarDays = eachDayOfInterval({
    start: calendarStart,
    end: calendarEnd,
  })

  const today = new Date()

  return (
    <div className="flex flex-col flex-grow overflow-hidden">
      <div className="hidden md:grid grid-cols-7 border-border divide-x divide-border">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
          <div
            key={day}
            className="py-2 text-center text-sm font-medium text-muted-foreground border-b border-border"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-7 flex-grow overflow-y-auto">
        {calendarDays.map((day) => {
          const dayEvents = events.filter((event) =>
            isSameDay(event.start, day)
          )
          const isToday = isSameDay(day, today)

          return (
            <div
              key={day.toISOString()}
              className={cn(
                'relative flex flex-col border-b border-r p-2 aspect-square cursor-pointer',
                !isSameMonth(day, date) && 'bg-muted/50 hidden md:flex'
              )}
              onClick={(e) => {
                e.stopPropagation()
                setDate(day)
                setMode('day')
              }}
            >
              <div
                className={cn(
                  'text-sm font-medium w-fit p-1 flex flex-col items-center justify-center rounded-full aspect-square',
                  isToday && 'bg-primary text-background'
                )}
              >
                {format(day, 'd')}
              </div>
              <div className="flex flex-col gap-1 mt-1">
                {dayEvents.slice(0, 3).map((event) => (
                  <CalendarEvent
                    key={event.id}
                    event={event}
                    className="relative h-auto"
                    month
                  />
                ))}
                {dayEvents.length > 3 && (
                  <div
                    className="text-xs text-muted-foreground"
                    onClick={(e) => {
                      e.stopPropagation()
                      setDate(day)
                      setMode('day')
                    }}
                  >
                    +{dayEvents.length - 3} more
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
