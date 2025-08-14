export default function SkillBadge({ label }: { label: string }) {
  return (
    <span className="rounded-md border bg-background px-2.5 py-1 text-sm text-foreground shadow-sm">
      {label}
    </span>
  );
}