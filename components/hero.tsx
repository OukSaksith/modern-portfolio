'use client';

// 'motion' provides animation components for React elements using Framer Motion.
// It enables declarative animations for UI elements, such as fade, slide, and scale effects.
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';
import { ArrowRight, Mail, MapPin } from 'lucide-react';

export default function Hero() {

  // Smooth scroll handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <section className="container py-5 sm:py-5">
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
               • {siteConfig.role} • {siteConfig.secRole}
            </motion.p>
            <motion.p
              className="mt-2 text-base text-muted-foreground"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-1"><MapPin className="size-4" />{siteConfig.location}</span>
            </motion.p>
            <motion.p
              className="mt-2 text-base text-muted-foreground"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.13, duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-1"><Mail className="size-4 mr-1" />{siteConfig.email}</span>
              <br />
              <span className="inline-flex items-center gap-1"><svg className="inline-block align-middle mr-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#6b7280' }}><path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72c.13 1.13.37 2.23.72 3.28a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.05.35 2.15.59 3.28.72A2 2 0 0 1 22 16.92z"></path></svg>{siteConfig.phone}</span>
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
                onClick={(e) => handleNavClick(e, '#projects')}
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
            className="relative h-56 sm:h-72 lg:h-80 overflow-visible flex items-center justify-center bg-transparent"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            {/* Main image */}
            <img
              src="/images/hero_pic.png"
              alt="Profile"
              className="h-full w-auto object-cover"
              style={{ objectFit: 'cover', border: 'none', borderRadius: 0, background: 'transparent' }}
            />
          </motion.div>
        </div>
        <div className="w-full h-px bg-neutral-300 mt-8 mb-4" />
      </section>
    </>
  );
}