import type { Metadata } from 'next';
import { StatementsContent } from '@/components/statements-content';

export const metadata: Metadata = {
  title: 'Statements | Parsis Foundation',
  description: 'Official statements and addresses from HRH Parsis Foundation on matters of importance.',
  openGraph: {
    title: 'Statements | Parsis Foundation',
    description: 'Official statements and addresses from HRH Parsis Foundation on matters of importance.',
  },
};

export default function StatementsPage() {
  return <StatementsContent />;
}
