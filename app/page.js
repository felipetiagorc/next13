import React, { Suspense } from 'react';
import TarefasList from './(users)/tarefas/TarefasList';
export default function Home() {
  return (
    <>
      <Suspense fallback={<p className='text-red-500'>Carregando Tarefas</p>}>
        <h1>Carregando Tarefas</h1>
        <div className='flex space-x-2'>
          <TarefasList />
        </div>
      </Suspense>

      <Suspense
        fallback={<p className='text-red-500'>Carregando Outra Coisa</p>}
      >
        <h1>Carregando Outra Coisa </h1>
        <div className='flex space-x-2'>
          <TarefasList />
        </div>
      </Suspense>
    </>
  );
}
