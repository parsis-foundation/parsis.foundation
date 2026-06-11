import type { Metadata } from 'next';
import { PrivacyContent } from '@/components/privacy-content';

export const metadata: Metadata = {
  title: 'Privacy Policy | Parsis Foundation',
  description: 'Privacy policy for parsis.foundation - how we collect, use, and protect your information.',
  openGraph: {
    title: 'Privacy Policy | Parsis Foundation',
    description: 'Privacy policy for parsis.foundation.',
  },
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
