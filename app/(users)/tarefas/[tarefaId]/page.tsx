import React from 'react';
import { Tarefas } from '../../../../typings';
import { notFound } from 'next/navigation';

export const dynamicParams = true;
// mesmo q não tenha gerado no build, vai gerar dinamicamente a pagina... problema: mesmo que ela nao exista

type PageProps = {
  params: {
    tarefaId: string;
  };
};

const fetchTarefa = async (tarefaId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${tarefaId}`
    // { cache: 'no-cache' } =  SSR sempre Server Side Render
    // { cache: 'force-cache' } = SSG = sempre Static
    //{ next: {revalidate: 60} = ISR = Revalidar a cada 60segundos
  );
  const tarefa = await res.json();
  return tarefa;
};

async function TarefaDetalhes({ params: { tarefaId } }: PageProps) {
  const tarefa: Tarefas = await fetchTarefa(tarefaId); // recebe o id como param e busca ele
  if (!tarefa.id) return notFound();

  return (
    <div className='p-10 bg-yellow-200 border-2 m-2 shadow-lg'>
      <p>
        #{tarefa.id}: {tarefa.title}
      </p>

      <p>Completo: {tarefa.completed ? 'Sim' : 'Não'}</p>

      <p className='border-t border-black mt-5 text-right'>
        Pelo usuário: {tarefa.userId}
      </p>
    </div>
  );
}
export default TarefaDetalhes;

//gerar cada pagina de tarefa no BUILD:

export async function generateStaticParams() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
  const tarefas: Tarefas[] = await res.json();

  // para limitar:
  const dezPrimeiras = tarefas.splice(0, 10);

  return dezPrimeiras.map(tarefa => ({
    tarefaId: tarefa.id.toString()
  }));

  // gerando para todos:
  //   return tarefas.map(tarefa => ({
  //     tarefaId: tarefa.id.toString()
  //   }));
}
