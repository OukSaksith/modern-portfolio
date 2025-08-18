'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { siteConfig } from '@/config/site';
import { Github, Linkedin } from 'lucide-react';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      aria-label="Toggle Theme"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="hidden sm:inline-flex size-9 items-center justify-center rounded-md border hover:bg-accent"
    >
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  );
}

export default function Navbar() {
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
    <header className="sticky top-0 z-50 border-b backdrop-blur supports-[backdrop-filter]:bg-background/70 bg-gradient-to-r from-white via-gray-100 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="font-semibold">
          {siteConfig.name}
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-muted-foreground hover:text-foreground"
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex size-9 items-center justify-center rounded-md border hover:bg-accent"
            aria-label="GitHub"
          >
            <Github className="size-4" />
          </a>
          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex size-9 items-center justify-center rounded-md border hover:bg-accent"
            aria-label="LinkedIn"
          >
            <Linkedin className="size-4" />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}