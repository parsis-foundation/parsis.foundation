import type { Metadata } from 'next';
import { StrategicPrioritiesContent } from '@/components/strategic-priorities-content';

export const metadata: Metadata = {
  title: 'Strategic Priorities | Parsis Foundation',
  description: 'Strategic priorities for advancing sustainability, education, international cooperation, and economic prosperity.',
  openGraph: {
    title: 'Strategic Priorities | Parsis Foundation',
    description: 'Strategic priorities for advancing sustainability, education, international cooperation, and economic prosperity.',
  },
};

export default function StrategicPrioritiesPage() {
  return <StrategicPrioritiesContent />;
}
