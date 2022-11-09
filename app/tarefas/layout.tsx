import React from 'react';
import TarefasList from './TarefasList';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='flex'>
      <div>
        {/* @ts-ignore */}
        <TarefasList />
      </div>
      <div className='flex-1'>{children}</div>
    </main>
  );
}
