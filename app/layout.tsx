import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Adam Kratiuk — Twenty years in voice',
  description: 'Voice AI sales professional. Founding GTM. Former Twilio AE. This site is the conversation, the demo, and the first work sample.',
  openGraph: {
    title: 'Adam Kratiuk — Twenty years in voice',
    description: 'Founding GTM seat in Voice AI. Twenty years selling every wave of business voice.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
