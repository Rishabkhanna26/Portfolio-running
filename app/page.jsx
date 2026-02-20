import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export const metadata = {
  title: 'Rishab Khanna | WhatsApp Automation and AI Chatbot Developer',
  description: 'Portfolio and service hub for WhatsApp automation, AI chatbot development, and lead generation systems for growing businesses.'
};

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden w-full">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
