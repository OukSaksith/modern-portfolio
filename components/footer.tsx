import { siteConfig } from '@/config/site';

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8 text-sm text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <p className="opacity-80">Built with Next.js, Tailwind, and ❤️</p>
      </div>
    </footer>
  );
}