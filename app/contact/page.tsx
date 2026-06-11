import type { Metadata } from 'next';
import { ContactContent } from '@/components/contact-content';

export const metadata: Metadata = {
  title: 'Contact | Parsis Foundation',
  description: 'Official communication channels for HRH Parsis Foundation. All official communications originate only from verified channels.',
  openGraph: {
    title: 'Contact | Parsis Foundation',
    description: 'Official communication channels for HRH Parsis Foundation.',
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
