import React from 'react';

export default function SkillBadge({ label, icon }: { label: string; icon?: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-md border bg-background px-2.5 py-1 text-sm text-foreground shadow-sm">
      {icon && <span className="text-lg">{icon}</span>}
      {label}
    </span>
  );
}