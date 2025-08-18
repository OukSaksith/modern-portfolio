
import React from 'react';
import { motion } from 'framer-motion';
import type { Certification } from '@/lib/data';

export default function CertificationItem({ item }: { item: Certification }) {

  return (
    <motion.div
      className="rounded-lg border p-4 bg-card/50"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div className="flex items-center gap-3 mb-1" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1, duration: 0.5 }} viewport={{ once: true, amount: 0.3 }}>
        {item.logo && (
          <motion.img
            src={item.logo}
            alt={item.issuer + ' logo'}
            className="h-20 w-20 object-contain rounded-full border"
            style={{ background: 'white' }}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          />
        )}
        <motion.div className="font-semibold text-lg" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.4 }} viewport={{ once: true, amount: 0.3 }}>{item.title}</motion.div>
      </motion.div>
      <motion.div className="text-muted-foreground text-sm" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.25, duration: 0.4 }} viewport={{ once: true, amount: 0.3 }}>{item.issuer}{item.year ? ` · ${item.year}` : ''}</motion.div>
      {item.description && (
        <motion.div className="mt-2 text-sm text-muted-foreground" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.4 }} viewport={{ once: true, amount: 0.3 }}>{item.description}</motion.div>
      )}
    </motion.div>
  );
}
