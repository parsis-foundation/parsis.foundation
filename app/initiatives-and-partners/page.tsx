import type { Metadata } from 'next';
import { InitiativesContent } from '@/components/initiatives-content';

export const metadata: Metadata = {
  title: 'Initiatives & Partners | Parsis Foundation',
  description: 'Technology, humanitarian, and cultural initiatives supporting the Iranian people and preserving Persian heritage.',
  openGraph: {
    title: 'Initiatives & Partners | Parsis Foundation',
    description: 'Technology, humanitarian, and cultural initiatives supporting the Iranian people and preserving Persian heritage.',
  },
};

export default function InitiativesPage() {
  return <InitiativesContent />;
}
