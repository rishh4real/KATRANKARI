export function AnnouncementBar({ message }: { message?: string }) {
  if (!message) return null;
  return <div className="bg-foreground px-4 py-2 text-center text-xs font-medium tracking-wide text-background">{message}</div>;
}
