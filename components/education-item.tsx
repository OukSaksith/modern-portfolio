import React from 'react';
import type { Education } from '@/lib/data';

export default function EducationItem({ item }: { item: Education }) {
  return (
    <div className="rounded-lg border p-4 bg-card/50">
      <div className="flex items-center gap-3 mb-1">
        {item.logo && (
          <img
            src={item.logo}
            alt={item.school + ' logo'}
            className="h-20 w-20 object-contain rounded-full border"
            style={{ background: 'white' }}
          />
        )}
        <div className="font-semibold text-lg">{item.degree}</div>
      </div>
      <div className="text-muted-foreground text-sm">{item.school} &middot; {item.years}</div>
      <ul className="list-disc list-inside mt-2 text-sm text-muted-foreground">
        {item.coursework.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </div>
  );
}
