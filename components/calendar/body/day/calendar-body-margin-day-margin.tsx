import { format } from 'date-fns'
import { cn } from '@/lib/utils'

export const hours = Array.from({ length: 24 }, (_, i) => i)

export default function CalendarBodyMarginDayMargin({
  className,
}: {
  className?: string
}) {
  return (
    <div
      className={cn(
        'sticky left-0 w-12 bg-background z-10 flex flex-col',
        className
      )}
    >
      <div className="sticky top-0 left-0 h-[33px] bg-background z-20 border-b" />
      <div className="sticky left-0 w-12 bg-background z-10 flex flex-col">
        {hours.map((hour) => (
          <div key={hour} className="relative h-32 first:mt-0">
            {hour !== 0 && (
              <span className="absolute text-xs text-muted-foreground -top-2.5 left-2">
                {format(new Date().setHours(hour, 0, 0, 0), 'h a')}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
