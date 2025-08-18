'use client';

// 'motion' provides animation components for React elements using Framer Motion.
// It enables declarative animations for UI elements, such as fade, slide, and scale effects.
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';
import { ArrowRight, Mail, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="container py-10 sm:py-10">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <motion.h1
            className="text-4xl sm:text-5xl font-bold leading-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {siteConfig.name}
          </motion.h1>
          <motion.p
            className="mt-2 text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            {siteConfig.role} • <span className="inline-flex items-center gap-1"><MapPin className="size-4" />{siteConfig.location}</span>
          </motion.p>
          <motion.p
            className="mt-6 text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            {siteConfig.summary}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-primary-foreground hover:opacity-90"
            >
              View Projects <ArrowRight className="size-4" />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 rounded-md border px-4 py-2 hover:bg-accent"
            >
              <Mail className="size-4" /> Contact
            </a>
          </motion.div>
        </div>

        <motion.div
          className="relative h-56 sm:h-72 lg:h-80 rounded-2xl border overflow-hidden bg-gradient-to-br from-blue-500/20 via-fuchsia-500/20 to-emerald-500/20"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <div className="absolute inset-0">
            <div className="absolute -left-10 -top-10 size-40 rounded-full bg-blue-500/25 blur-3xl animate-float" />
            <div className="absolute -right-10 -bottom-10 size-48 rounded-full bg-fuchsia-500/25 blur-3xl animate-float" />
            <div className="absolute left-1/3 top-1/3 size-24 rounded-full bg-emerald-500/25 blur-3xl animate-float" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}