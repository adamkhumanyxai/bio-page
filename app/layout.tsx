import type { Metadata } from 'next';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://adamkratiuk.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Adam Kratiuk — Twenty years in voice',
  description: 'Voice AI sales professional. Founding GTM. Former Twilio AE. This site is the conversation, the demo, and the first work sample.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Adam Kratiuk — Twenty years in voice',
    description: 'Founding GTM seat in Voice AI. Twenty years selling every wave of business voice.',
    url: '/',
    siteName: 'Adam Kratiuk',
    type: 'website',
    images: [
      {
        url: '/adam-portrait.jpg',
        width: 1200,
        height: 1500,
        alt: 'Adam Kratiuk',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adam Kratiuk — Twenty years in voice',
    description: 'Founding GTM seat in Voice AI. Twenty years selling every wave of business voice.',
    images: ['/adam-portrait.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
