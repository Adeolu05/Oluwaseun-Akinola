import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ImpactWork } from './components/ImpactWork';
import { Speaking } from './components/Speaking';
import { Achievements } from './components/Achievements';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div id="top" className="antialiased overflow-x-hidden selection:bg-soft-gold/30 selection:text-navy-blue min-h-screen flex flex-col">
      <Header />
      <main className="w-full min-w-0 flex-1">
        <Hero />
        <About />
        <ImpactWork />
        <Speaking />
        <Achievements />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

