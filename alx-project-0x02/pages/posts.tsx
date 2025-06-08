// pages/posts.tsx

import React, { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { PostProps } from '@/interfaces';

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then(res => res.json())
      .then(data => {
        const formatted = data.map((post: any) => ({
          title: post.title,
          content: post.body,
          userId: post.userId,
          id: post.id,
        }));
        setPosts(formatted);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      <main className="p-8 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Posts</h1>

        {loading ? (
          <p>Loading posts...</p>
        ) : (
          <div className="grid gap-4">
            {posts.map(post => (
              <PostCard
                key={post.id}
                title={post.title}
                content={post.content}
                userId={post.userId}
              />
            ))}
          </div>
        )}
      </main>
    </>
  );
};

export default PostsPage;
