'use client'

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Mode, calendarModes } from '../../calendar-types'
import { useCalendarContext } from '../../calendar-context'
import { calendarModeIconMap } from '../../calendar-mode-icon-map'

export default function CalendarHeaderActionsMode() {
  const { mode, setMode } = useCalendarContext()

  return (
    <ToggleGroup
      className="flex gap-0 -space-x-px rounded-lg shadow-sm shadow-black/5 rtl:space-x-reverse"
      type="single"
      variant="outline"
      value={mode}
      onValueChange={(value) => {
        if (value) setMode(value as Mode)
      }}
    >
      {calendarModes.map((modeValue) => (
        <ToggleGroupItem
          key={modeValue}
          className="flex-1 rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10 text-base flex items-center justify-center gap-2"
          value={modeValue}
        >
          {calendarModeIconMap[modeValue]}
          <p className="hidden xl:block font-medium">
            {modeValue.charAt(0).toUpperCase() + modeValue.slice(1)}
          </p>
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}
