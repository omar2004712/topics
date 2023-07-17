import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Topics - New',
  description: 'Create a New Topic',
};

export default function layout({ children }: { children: React.ReactNode }) {
  return children;
}
