import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className='p-5 bg-sky-500'>
      <Link className='px-2 py-1 bg-white text-sky-500 rounded-lg' href='/'>
        Home
      </Link>
    </header>
  );
}
