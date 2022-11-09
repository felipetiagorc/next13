import Link from 'next/link';
import React from 'react';
import { Tarefas } from '../../typings';

const fetchTarefas = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
  const tarefas: Tarefas[] = await res.json();
  return tarefas;
};

async function TarefasList() {
  const tarefas = await fetchTarefas();

  return (
    <>
      {tarefas.map(tarefa => (
        <p key={tarefa.id}>
          <Link href={`/tarefas/${tarefa.id}`}>Tarefa: {tarefa.id}</Link>
        </p>
      ))}
    </>
  );
}

export default TarefasList;
