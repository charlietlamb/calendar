import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useCalendarContext } from '../calendar-context'

export default function CalendarNewEventDialog() {
  const { newEventDialogOpen, setNewEventDialogOpen } = useCalendarContext()
  return (
    <Dialog open={newEventDialogOpen} onOpenChange={setNewEventDialogOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create event</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
