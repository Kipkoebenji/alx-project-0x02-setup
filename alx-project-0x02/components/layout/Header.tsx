// components/layout/Header.tsx

import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const { pathname } = useRouter();

  const linkClass = (path: string) =>
    `px-4 py-2 font-medium hover:text-blue-600 ${
      pathname === path ? 'text-blue-600 underline' : 'text-gray-700'
    }`;

  return (
    <header className="bg-white shadow-md p-4 mb-6">
      <nav className="max-w-4xl mx-auto flex space-x-6">
        <Link href="/home" className={linkClass('/home')}>
          Home
        </Link>
        <Link href="/about" className={linkClass('/about')}>
          About
        </Link>
        <Link href="/posts" className={linkClass('/posts')}>
          Posts
        </Link>
      </nav>
    </header>
  );
};

export default Header;
