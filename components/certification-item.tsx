import React from 'react';
import type { Certification } from '@/lib/data';

export default function CertificationItem({ item }: { item: Certification }) {
  return (
    <div className="rounded-lg border p-4 bg-card/50">
      <div className="font-semibold text-lg">{item.title}</div>
      <div className="text-muted-foreground text-sm">{item.issuer}{item.year ? ` · ${item.year}` : ''}</div>
      {item.description && (
        <div className="mt-2 text-sm text-muted-foreground">{item.description}</div>
      )}
    </div>
  );
}
