"use client";

import { motion } from "framer-motion";
import Hero from "@/components/hero";
import Section from "@/components/section";
import ProjectCard from "@/components/project-card";
import ExperienceItem from "@/components/experience-item";
import SkillBadge from "@/components/skill-badge";
import {
  projects,
  experience,
  skills,
  featuredTags,
  education,
  certifications,
} from "@/lib/data";
import EducationItem from "@/components/education-item";
import CertificationItem from "@/components/certification-item";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />

      <Section id="about" title="About">
        <p className="text-muted-foreground">
          I’m a developer focused on building performant, accessible, and
          delightful web apps. I enjoy solving complex problems with simple,
          elegant solutions and shipping real value.
        </p>
      </Section>

      <Section id="projects" title="Projects" badge={featuredTags.join(" · ")}>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="experience" title="Experience">
        <div className="space-y-6">
          {experience.map((e) => (
            <motion.div
              key={`${e.company}-${e.role}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
            >
              <ExperienceItem item={e} />
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="skills" title="Skills">
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <SkillBadge key={s} label={s} />
          ))}
        </div>
      </Section>

      <Section id="education" title="Education">
        <div className="space-y-6">
          {education.map((e) => (
            <EducationItem key={`${e.school}-${e.degree}`} item={e} />
          ))}
        </div>
      </Section>

      <Section id="certified" title="Certified / Completed">
        <div className="space-y-6">
          {certifications.map((c) => (
            <CertificationItem key={`${c.issuer}-${c.title}`} item={c} />
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <p className="text-muted-foreground">
          Want to collaborate or have a project in mind? Reach out and let’s
          talk.
        </p>
        <div className="mt-4">
          <a
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-primary-foreground hover:opacity-90"
            href="mailto:you@example.com?subject=Project%20Inquiry"
          >
            Email me
          </a>
        </div>
      </Section>

      <Footer />
    </>
  );
}
