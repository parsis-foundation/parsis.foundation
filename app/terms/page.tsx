import type { Metadata } from 'next';
import { TermsContent } from '@/components/terms-content';

export const metadata: Metadata = {
  title: 'Terms of Use | Parsis Foundation',
  description: 'Terms of use and conditions for parsis.foundation.',
  openGraph: {
    title: 'Terms of Use | Parsis Foundation',
    description: 'Terms of use and conditions for parsis.foundation.',
  },
};

export default function TermsPage() {
  return <TermsContent />;
}
