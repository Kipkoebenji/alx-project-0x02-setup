// pages/about.tsx

import React from 'react';
import Button from '@/components/common/Button';

const AboutPage: React.FC = () => {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">About Page</h1>

      <div className="space-y-4">
        <Button size="small" shape="rounded-sm">Small Button</Button>
        <Button size="medium" shape="rounded-md">Medium Button</Button>
        <Button size="large" shape="rounded-full">Large Button</Button>
      </div>
    </main>
  );
};

export default AboutPage;
