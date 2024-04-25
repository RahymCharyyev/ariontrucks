import About from '@/components/About';
import Contacts from '@/components/Contacts';
import Hero from '@/components/Hero';
import Leasing from '@/components/Leasing';
import TechnicalService from '@/components/TechnicalService';

export default function Home() {
  return (
    <main>
      {/* <Slider /> */}
      <Hero />
      <TechnicalService />
      <Leasing />
      <About />
      <Contacts />
    </main>
  );
}
