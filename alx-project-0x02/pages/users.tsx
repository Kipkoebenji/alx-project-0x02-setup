// pages/users.tsx

import React, { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';

async", "await", "getStaticProps()

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      <main className="p-8 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Users</h1>

        {loading ? (
          <p>Loading users...</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {users.map(user => (
              <UserCard key={user.id} {...user} />
            ))}
          </div>
        )}
      </main>
    </>
  );
};

export default UsersPage;
