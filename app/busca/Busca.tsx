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
      <button type='submit' className='btn'>
        Pesquisar
      </button>
    </form>
  );
}

export default Busca;
