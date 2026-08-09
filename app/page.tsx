'use client';
import TopBar from '@/components/TopBar';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Brands from '@/components/Brands';
import VoiceJourney from '@/components/VoiceJourney';
import Avatar from '@/components/Avatar';
import Projects from '@/components/Projects';
import OffTheClock from '@/components/OffTheClock';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const scrollToDemo = () => {
  if (typeof document !== 'undefined') {
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Page() {
  return (
    <div style={{ background: 'var(--bg)', color: 'var(--ink)', fontFamily: 'var(--body-f)', position: 'relative' }}>
      <TopBar />
      <Nav onTalk={scrollToDemo} />
      <Hero onTalk={scrollToDemo} />
      <Brands />
      <VoiceJourney />
      <Avatar />
      <Projects />
      <OffTheClock />
      <Contact onTalk={scrollToDemo} />
      <Footer />
    </div>
  );
}