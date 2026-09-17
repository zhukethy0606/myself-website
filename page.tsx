import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Education } from '@/components/sections/Education';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';
import { Gaming } from '@/components/sections/Gaming';
import { EighteenDays } from '@/components/sections/EighteenDays';
import { CoreCapabilities } from '@/components/sections/CoreCapabilities';
import { AITools } from '@/components/sections/AITools';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Education />
        <CoreCapabilities />
        <Projects />
        <Experience />
        <Gaming />
        <EighteenDays />
        <AITools />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
