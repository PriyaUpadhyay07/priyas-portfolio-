import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import CaseStudies from "@/components/CaseStudies";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <CaseStudies />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
