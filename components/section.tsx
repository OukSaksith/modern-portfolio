import { cn } from '@/lib/utils';

export default function Section({
  id,
  title,
  badge,
  children,
  className
}: {
  id?: string;
  title: string;
  badge?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn('container py-16 sm:py-24', className)}>
      <div className="mb-8">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-semibold">{title}</h2>
          {badge ? (
            <span className="rounded-full border px-2 py-0.5 text-xs text-muted-foreground">
              {badge}
            </span>
          ) : null}
        </div>
      </div>
      {children}
    </section>
  );
}