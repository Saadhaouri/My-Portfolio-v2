import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-navy-100 py-10 dark:border-white/10">
      <div className="container-page flex flex-col items-center justify-between gap-4 text-sm text-navy-500 dark:text-navy-300 sm:flex-row">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. Built with Next.js, Tailwind CSS &amp; Framer Motion.
        </p>
        <div className="flex gap-5">
          <a className="hover:text-navy-900 dark:hover:text-white" href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a className="hover:text-navy-900 dark:hover:text-white" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a className="hover:text-navy-900 dark:hover:text-white" href={`mailto:${profile.email}`}>
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
