import { ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Project } from '@/lib/data';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className={cn('group rounded-xl border bg-card p-4 shadow-sm transition-colors hover:bg-accent/30')}>
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <div className="flex items-center gap-1">
          {project.repo && (
            <a className="rounded-md border p-1.5 hover:bg-accent" href={project.repo} target="_blank" rel="noreferrer" aria-label="Repository">
              <Github className="size-4" />
            </a>
          )}
          {project.href && (
            <a className="rounded-md border p-1.5 hover:bg-accent" href={project.href} target="_blank" rel="noreferrer" aria-label="Live demo">
              <ExternalLink className="size-4" />
            </a>
          )}
        </div>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span key={t} className="rounded-full border px-2 py-0.5 text-xs text-muted-foreground">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}