import { siteConfig } from '@/config/site';

export default function Footer() {
  return (
    <footer className="border-t bg-gradient-to-r from-gray-100 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container py-5 text-sm text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <p className="opacity-80">Built with Next.js, Tailwind</p>
      </div>
    </footer>
  );
}