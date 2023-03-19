import { About, Contact, Experience, Hero, Works } from "@/components/pages";

export default function Home() {
  return (
    <div className="xl:max-w-[1024px] mx-auto">
      <section
        name="home"
        id="home"
        className="min-h-screen xl:max-w-[992px] mx-auto flex items-center my-20 relative"
      >
        <Hero />
      </section>
      <section name="about" id="about" className="min-h-screen py-20">
        <About />
      </section>
      <section name="experience" id="experience" className="min-h-screen py-20">
        <Experience />
      </section>
      <section name="work" id="work" className="min-h-screen py-20">
        <Works />
      </section>
      <section
        name="contact"
        id="contact"
        className="min-h-screen flex items-center py-20"
      >
        <Contact />
      </section>
    </div>
  );
}
