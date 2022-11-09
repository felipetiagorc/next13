'use client';

import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react';

function Busca() {
  const [termo, setTermo] = useState('');
  const router = useRouter();

  const handleBusca = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTermo('');
    router.push(`/busca/${termo}`);
  };
  return (
    <form onSubmit={handleBusca}>
      <input
        type='text'
        value={termo}
        placeholder='Pesquisa ai viado'
        onChange={e => setTermo(e.target.value)}
      />
      <button
        className='bg-sky-500 text-white font-bold py-2 px-4 rounded-lg'
        type='submit'
      >
        Pesquisar
      </button>
    </form>
  );
}

export default Busca;
