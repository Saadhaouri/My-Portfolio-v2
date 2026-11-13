"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import toast from "react-hot-toast";
import { sendEmail } from "@/actions/sendEmail";
import { profile } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import SubmitBtn from "./submit-btn";
import { fadeUp, stagger } from "./reveal";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: "ph:envelope-simple-duotone" },
  { label: "LinkedIn", value: "Saad Haouri", href: profile.linkedin, icon: "ph:linkedin-logo-duotone" },
  { label: "GitHub", value: "@Saadhaouri", href: profile.github, icon: "ph:github-logo-duotone" },
  { label: "Location", value: profile.location, icon: "ph:map-pin-duotone" },
];

const inputClass =
  "w-full rounded-xl border border-navy-100 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-navy-300 transition focus:border-gold-400 focus:outline-none focus:ring-4 focus:ring-gold-400/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-navy-300";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.3);
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <section ref={ref} id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something useful"
          description="Have a project, a migration or a role in mind? Send me a message and I'll get back to you."
        />

        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger(0.08)}
            className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1"
          >
            {channels.map((c) => {
              const inner = (
                <>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy-800 text-gold-400 transition-transform group-hover:scale-110 dark:bg-white/5">
                    <Icon icon={c.icon} className="text-xl" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-wider text-navy-400 dark:text-navy-300">{c.label}</span>
                    <span className="block truncate text-sm font-semibold text-navy-900 dark:text-white">{c.value}</span>
                  </span>
                </>
              );
              return (
                <motion.li key={c.label} variants={fadeUp} whileHover={c.href ? { x: 4 } : undefined}>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="card group flex items-center gap-4 p-4 transition-colors hover:border-gold-300"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="card group flex items-center gap-4 p-4">{inner}</div>
                  )}
                </motion.li>
              );
            })}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
          <form
            ref={formRef}
            className="card space-y-4 p-6 sm:p-8"
            action={async (formData: FormData) => {
              const { error } = await sendEmail(formData);
              if (error) {
                toast.error(error);
                return;
              }
              toast.success("Message sent. Thank you!");
              formRef.current?.reset();
            }}
          >
            <div>
              <label htmlFor="senderEmail" className="mb-1.5 block text-sm font-medium text-navy-700 dark:text-navy-100">
                Your email
              </label>
              <input
                id="senderEmail"
                className={inputClass}
                name="senderEmail"
                type="email"
                required
                maxLength={500}
                placeholder="you@company.com"
                autoComplete="email"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy-700 dark:text-navy-100">
                Message
              </label>
              <textarea
                id="message"
                className={`${inputClass} h-44 resize-none`}
                name="message"
                placeholder="Tell me about your project…"
                required
                maxLength={5000}
              />
            </div>
            <SubmitBtn />
          </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
