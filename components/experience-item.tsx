import type { Experience } from '@/lib/data';

export default function ExperienceItem({ item }: { item: Experience }) {
  return (
    <div className="rounded-xl border bg-card p-5">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
        <div>
          <h3 className="font-semibold">{item.role}</h3>
          <p className="text-sm text-muted-foreground">{item.company}{item.location ? ` • ${item.location}` : ''}</p>
        </div>
        <p className="text-sm text-muted-foreground">{item.period}</p>
      </div>
      <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-muted-foreground">
        {item.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}