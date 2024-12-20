import { Columns2, Grid3X3, List } from 'lucide-react'
import { Mode } from './calendar-types'

export const calendarModeIconMap: Record<Mode, React.ReactNode> = {
  day: <List />,
  week: <Columns2 />,
  month: <Grid3X3 />,
}
