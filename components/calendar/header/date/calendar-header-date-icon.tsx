import { format } from 'date-fns'

export default function CalendarHeaderDateIcon() {
  return (
    <div className="flex size-14 flex-col items-start overflow-hidden rounded-lg border">
      <p className="flex h-6 w-full items-center justify-center bg-primary text-center text-xs font-semibold text-background uppercase">
        {format(new Date(), 'MMM')}
      </p>
      <p className="flex w-full items-center justify-center text-lg font-bold">
        {format(new Date(), 'dd')}
      </p>
    </div>
  )
}
