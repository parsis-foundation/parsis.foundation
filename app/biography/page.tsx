import type { Metadata } from 'next';
import { BiographyContent } from '@/components/biography-content';

export const metadata: Metadata = {
  title: 'Biography | Parsis Foundation',
  description: 'Artist, philanthropist, investor, and technologist—unified by a commitment to human dignity and building systems that serve humanity.',
  openGraph: {
    title: 'Biography | Parsis Foundation',
    description: 'Artist, philanthropist, investor, and technologist—unified by a commitment to human dignity and building systems that serve humanity.',
  },
};

export default function BiographyPage() {
  return <BiographyContent />;
}
