import React from 'react';
import type { Certification } from '@/lib/data';

export default function CertificationItem({ item }: { item: Certification }) {
  return (
    <div className="rounded-lg border p-4 bg-card/50">
      <div className="flex items-center gap-3 mb-1">
        {item.logo && (
          <img
            src={item.logo}
            alt={item.issuer + ' logo'}
            className="h-20 w-20 object-contain rounded-full border"
            style={{ background: 'white' }}
          />
        )}
        <div className="font-semibold text-lg">{item.title}</div>
      </div>
      <div className="text-muted-foreground text-sm">{item.issuer}{item.year ? ` · ${item.year}` : ''}</div>
      {item.description && (
        <div className="mt-2 text-sm text-muted-foreground">{item.description}</div>
      )}
    </div>
  );
}
