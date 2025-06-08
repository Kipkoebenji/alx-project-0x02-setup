import React from 'react';
import Header from '@/components/layout/Header';

const PostsPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="p-8 bg-white min-h-screen">
        <h1 className="text-3xl font-bold">Posts Page</h1>
        <p>This is where your posts will be listed.</p>
      </main>
    </>
  );
};

export default PostsPage;
