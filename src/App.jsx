import MainLayout from "./layouts/MainLayout"
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";

import SEO from "./components/common/SEO";

export default function App() {
  return (
    <MainLayout>
      
      <SEO 
        title="Rishikesh Karkhanis | Backend Developer" 
        description="Backend Developer & AI/ML Engineering Student passionate about building scalable backend systems, 
          REST APIs, and modern full-stack applications."
      />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </MainLayout>
  );
}