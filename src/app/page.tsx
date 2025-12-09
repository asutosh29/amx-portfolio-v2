import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth">
      <section className="snap-start h-screen">
        <Hero />
      </section>
      <section className="snap-start min-h-screen">
        <About />
      </section>
      <section className="snap-start min-h-screen">
        <Skills />
      </section>
      <section className="snap-start min-h-screen">
        <Projects />
      </section>
      <section className="snap-start min-h-screen">
        <Contact />
      </section>
    </div>
  );
}
