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
        className='border-4 rounded-lg p-2 w-max'
        autoFocus
        type='text'
        value={termo}
        placeholder='Digite aqui'
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
