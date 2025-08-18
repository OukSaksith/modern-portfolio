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
         I hold a Bachelor’s degree in Computer Science and am currently pursuing a Master’s degree in Information Technology, demonstrating my commitment to lifelong learning in the tech field. With hands-on experience as a developer, I have a strong foundation in software development and problem-solving. My journey has also led me into the world of DevOps, where I’ve successfully completed projects that bridge the gap between development and operations, enhancing efficiency and collaboration. I am passionate about leveraging technology to create innovative solutions and continuously improving my skills to stay ahead in this ever-evolving industry.Let’s connect and collaborate!
        </p>
      </Section>


      <Section id="experience" title="Experience">
        <div className="space-y-12">
          {experience.map((company) => (
            <div key={company.company} className="relative rounded-xl border bg-card p-5">
              <div className="flex items-center gap-2 mb-2 ml-10">
                {company.logo && (
                  <img
                    src={company.logo}
                    alt={company.company + ' logo'}
                    className="h-12 w-12 object-contain rounded-full border p-1"
                    style={{ background: 'white' }}
                  />
                )}
                <div className="font-bold text-lg">{company.company}</div>
              </div>
              <div className="relative ml-10">
                {/* Timeline vertical line: from first to last dot */}
                <div className="absolute left-[-2.25rem] top-6 bottom-6 w-0.5 bg-gradient-to-b from-primary/30 via-muted-foreground/30 to-primary/30" style={{ zIndex: 0 }} aria-hidden="true" />
                <div className="flex flex-col gap-12">
                  {company.roles.map((role, idx) => (
                    <div key={role.role + role.period} className="relative flex items-start">
                      {/* Timeline dot for each role, centered with role */}
                      <span className="absolute -left-9 top-4 z-10 h-4 w-4 rounded-full bg-primary border-2 border-white shadow" />
                      <motion.div
                        className="flex-1"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                      >
                        <ExperienceItem item={role} />
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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

      <Section id="certified" title="Certification">
        <div className="space-y-6">
          {certifications.map((c) => (
            <CertificationItem key={`${c.issuer}-${c.title}`} item={c} />
          ))}
        </div>
      </Section>
      
      <Section id="skills" title="Skills">
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <SkillBadge key={s.label} label={s.label} icon={s.icon} />
          ))}
        </div>
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
