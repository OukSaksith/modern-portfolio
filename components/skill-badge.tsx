

import { motion } from 'framer-motion';

export default function SkillBadge({ label, icon }: { label: string; icon?: React.ReactNode }) {

  return (
    <motion.span
      className="inline-flex items-center gap-1 rounded-md border bg-background px-2.5 py-1 text-sm text-foreground shadow-sm"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.06, boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }}
    >
      {icon && <span className="text-lg">{icon}</span>}
      {label}
    </motion.span>
  );
}