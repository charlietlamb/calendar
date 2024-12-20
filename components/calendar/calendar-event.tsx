import { CalendarEvent as CalendarEventType } from '@/components/calendar/calendar-types'
import { useCalendarContext } from '@/components/calendar/calendar-context'
import { format, isSameDay } from 'date-fns'
import { cn } from '@/lib/utils'

export default function CalendarEvent({
  event,
  month = false,
  className,
}: {
  event: CalendarEventType
  month?: boolean
  className?: string
}) {
  const { setSelectedEvent, setManageEventDialogOpen } = useCalendarContext()

  function getEventStyle(event: CalendarEventType) {
    const startHour = event.start.getHours()
    const startMinutes = event.start.getMinutes()

    let endHour = event.end.getHours()
    let endMinutes = event.end.getMinutes()

    if (!isSameDay(event.start, event.end)) {
      endHour = 23
      endMinutes = 59
    }

    const topPosition = startHour * 128 + (startMinutes / 60) * 128
    const duration = endHour * 60 + endMinutes - (startHour * 60 + startMinutes)
    const height = (duration / 60) * 128

    return {
      top: `${topPosition}px`,
      height: `${height}px`,
    }
  }

  return (
    <div
      key={event.id}
      className={cn(
        `px-3 py-1.5 rounded-md truncate cursor-pointer transition-all duration-300 bg-${event.color}-500/10 hover:bg-${event.color}-500/20 border border-${event.color}-500`,
        !month && 'absolute left-0 right-0 mx-2',
        className
      )}
      style={!month ? getEventStyle(event) : {}}
      onClick={(e) => {
        e.stopPropagation()
        setSelectedEvent(event)
        setManageEventDialogOpen(true)
      }}
    >
      <div
        className={cn(
          `flex flex-col w-full text-${event.color}-500`,
          month && 'flex-row items-center justify-between'
        )}
      >
        <p className={cn('font-bold truncate', month && 'text-xs')}>
          {event.title}
        </p>
        <p className={cn('text-sm', month && 'text-xs')}>
          <span>{format(event.start, 'h:mm a')}</span>
          <span className={cn('mx-1', month && 'hidden')}>-</span>
          <span className={cn(month && 'hidden')}>
            {format(event.end, 'h:mm a')}
          </span>
        </p>
      </div>
    </div>
  )
}
