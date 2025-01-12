import { useCalendarContext } from '../../calendar-context'
import { isSameDay } from 'date-fns'

export default function CalendarBodyDayEvents() {
  const { events, date, setManageEventDialogOpen, setSelectedEvent } =
    useCalendarContext()
  const dayEvents = events.filter((event) => isSameDay(event.start, date))

  return !!dayEvents.length ? (
    <div className="flex flex-col gap-2">
      <p className="font-medium p-2 pb-0 font-heading">Events</p>
      <div className="flex flex-col gap-2">
        {dayEvents.map((event) => (
          <div
            key={event.id}
            className="flex items-center gap-2 px-2 cursor-pointer"
            onClick={() => {
              setSelectedEvent(event)
              setManageEventDialogOpen(true)
            }}
          >
            <div className="flex items-center gap-2">
              <div className={`size-2 rounded-full bg-${event.color}-500`} />
              <p className="text-muted-foreground text-sm font-medium">
                {event.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="p-2 text-muted-foreground">No events today...</div>
  )
}
