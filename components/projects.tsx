"use client";

import { motion } from "framer-motion";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import Project from "./project";
import { stagger } from "./reveal";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.15);

  return (
    <section ref={ref} id="projects" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects"
          description="Management systems for real shops and companies: pharmacies, optical stores, furniture retail and ERP rollouts."
        />
        <motion.div
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger(0.1)}
        >
          {projectsData.map((project, i) => (
            // Two featured cards on top, three below on wide screens; the last card spans both columns on tablets.
            <Project
              key={project.title}
              {...project}
              className={`${i < 2 ? "xl:col-span-3" : "xl:col-span-2"} ${
                i === projectsData.length - 1 ? "md:col-span-2 xl:col-span-2" : ""
              }`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
