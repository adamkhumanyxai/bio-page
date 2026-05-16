'use client';
import { useState } from 'react';
import TopBar from '@/components/TopBar';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Brands from '@/components/Brands';
import Timeline from '@/components/Timeline';
import Avatar from '@/components/Avatar';
import Projects from '@/components/Projects';
import Record from '@/components/Record';
import OnStage from '@/components/OnStage';
import OffTheClock from '@/components/OffTheClock';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import VoiceCloneModal from '@/components/VoiceCloneModal';

export default function Page() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div style={{ background: 'var(--bg)', color: 'var(--ink)', fontFamily: 'var(--body-f)', position: 'relative' }}>
      <TopBar />
      <Nav onTalk={openModal} />
      <Hero onTalk={openModal} />
      <Brands />
      <Timeline />
      <Avatar onTalk={openModal} />
      <Projects />
      <Record />
      <OnStage />
      <OffTheClock />
      <Contact onTalk={openModal} />
      <Footer />
      <VoiceCloneModal open={modalOpen} onClose={closeModal} />
    </div>
  );
}
