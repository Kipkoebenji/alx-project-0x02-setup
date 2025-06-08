import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import PostModal from '@/components/common/PostModal';

interface Post {
  title: string;
  content: string;
}

const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  const handleAddPost = (post: Post) => setPosts([post, ...posts]);

  return (
    <>
      <Header />
      <main className="p-8 bg-gray-100 min-h-screen">
        <div className="flex justify-between mb-6">
          <h1 className="text-3xl font-bold">Home Page</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            New Post
          </button>
        </div>

        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddPost}
        />

        {posts.map((post, idx) => (
          <div key={idx} className="bg-white p-4 mb-4 rounded shadow">
            <h2 className="font-bold text-xl">{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </main>
    </>
  );
};

export default HomePage;
