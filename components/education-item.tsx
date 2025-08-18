import React from 'react';
import { motion } from 'framer-motion';
import type { Education } from '@/lib/data';

export default function EducationItem({ item }: { item: Education }) {
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
            alt={item.school + ' logo'}
            className="h-20 w-20 object-contain rounded-full border"
            style={{ background: 'white' }}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          />
        )}
        <motion.div className="font-semibold text-lg" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.4 }} viewport={{ once: true, amount: 0.3 }}>{item.degree}</motion.div>
      </motion.div>
      <motion.div className="text-muted-foreground text-sm" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.25, duration: 0.4 }} viewport={{ once: true, amount: 0.3 }}>{item.school} &middot; {item.years}</motion.div>
      <motion.ul className="list-disc list-inside mt-2 text-sm text-muted-foreground" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.4 }} viewport={{ once: true, amount: 0.3 }}>
        {item.coursework.map((c, i) => (
          <motion.li key={c} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 + i * 0.05, duration: 0.3 }} viewport={{ once: true, amount: 0.3 }}>{c}</motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
