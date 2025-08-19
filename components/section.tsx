import { cn } from '@/lib/utils';
import { Book, Award, Briefcase, Layers, User, Star, Mail } from 'lucide-react';
// Map section titles to Lucide icons
const sectionIcons: Record<string, React.ReactNode> = {
  About: <User className="inline-block mr-2 size-6 text-blue-500 dark:text-blue-400 align-middle" />,
  Projects: <Layers className="inline-block mr-2 size-6 text-purple-500 dark:text-purple-400 align-middle" />,
  Experience: <Briefcase className="inline-block mr-2 size-6 text-amber-600 dark:text-amber-400 align-middle" />,
  Skills: <Star className="inline-block mr-2 size-6 text-yellow-500 dark:text-yellow-300 align-middle" />,
  Education: <Book className="inline-block mr-2 size-6 text-green-600 dark:text-green-400 align-middle" />,
  Certification: <Award className="inline-block mr-2 size-6 text-pink-500 dark:text-pink-400 align-middle" />,
  Contact: <Mail className="inline-block mr-2 size-6 text-cyan-500 dark:text-cyan-400 align-middle" />,
};

export default function Section({
  id,
  title,
  badge,
  children, 
  className
}: {
  id?: string;
  title: string;
  badge?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn('container py-5 sm:py-5', className)}>
      <div className="mb-8">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            {sectionIcons[title]}
            {title}
          </h2>
          {badge ? (
            <span className="rounded-full border px-2 py-0.5 text-xs text-muted-foreground">
              {badge}
            </span>
          ) : null}
        </div>
        <div className="flex justify-end items-center mt-2">
              <div
                className="mt-1 h-2 w-40 rounded-full opacity-90 bg-purple-200"
              />
        </div>
      </div>
      {children}
    </section>
  );  
}