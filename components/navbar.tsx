'use client';

import Link from 'next/link';
import ThemeToggle from './theme-toggle';
import { siteConfig } from '@/config/site';
import { Github, Linkedin } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="font-semibold">
          {siteConfig.name}
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {siteConfig.nav.map((item) => (
            <a key={item.href} href={item.href} className="text-muted-foreground hover:text-foreground">
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