import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Services } from './components/Services';
import { Industries } from './components/Industries';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-brand-bg">
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
        <Industries />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

export default App;
