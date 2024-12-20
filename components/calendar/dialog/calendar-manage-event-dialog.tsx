import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useCalendarContext } from '../calendar-context'

export default function CalendarManageEventDialog() {
  const { manageEventDialogOpen, setManageEventDialogOpen } =
    useCalendarContext()

  return (
    <Dialog
      open={manageEventDialogOpen}
      onOpenChange={setManageEventDialogOpen}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Manage event</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
