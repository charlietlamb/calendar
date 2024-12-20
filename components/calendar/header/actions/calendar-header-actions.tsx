export default function CalendarHeaderActions({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex md:justify-start justify-between items-center gap-2">
      {children}
    </div>
  )
}
