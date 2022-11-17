'use client';

import Image from 'next/image';
import { use, useState } from 'react';

type Pokemon = {
  id: number;
  name: string;
  image?: string;
};
//Map pra pegar o nome e criar uma promessa:

const fetchMap = new Map<string, Promise<any>>();

function queryClient<QueryResult>(
  name: string,
  query: () => Promise<QueryResult>
): Promise<QueryResult> {
  if (!fetchMap.has(name)) {
    fetchMap.set(name, query());
  }
  return fetchMap.get(name)!; // só de chamar a key, executa a promisse no value?
}

export default function PokemonPage() {
  const pokemonResult = use(
    queryClient(
      'pokemon',
      () =>
        fetch('http://localhost:3000/api/pokemon').then(res =>
          res.json()
        ) as Promise<Pokemon[]>
    )
  );

  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>();

  //uso conditional do hook:  (só faz requisição se ja tiver um pokemon selecionado)
  const pokemonDetail = selectedPokemon
    ? use(
        queryClient(
          ['pokemon', selectedPokemon.id].join('-'),
          () =>
            fetch(`http://localhost:3000/api/${selectedPokemon.id}`).then(res =>
              res.json()
            ) as Promise<Pokemon[] & { image?: string }>
        )
      )
    : null;

  return (
    <div>
      {pokemonResult.map(poke => (
        <button
          className='p-2 bg-sky-100 rounded-lg m-2'
          key={poke.id}
          onClick={() => setSelectedPokemon(poke)}
        >
          {poke.name}
        </button>
      ))}
      <div>
        {pokemonDetail && (
          <Image
            src={pokemonDetail.image}
            width={80}
            height={100}
            alt={pokemonDetail.name}
          />
        )}
      </div>
    </div>
  );
}
