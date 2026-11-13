import Intro from "@/components/intro";
import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Education from "@/components/education";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <Intro />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </main>
  );
}
