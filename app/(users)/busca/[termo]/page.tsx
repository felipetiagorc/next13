import React from 'react';

type PageProps = {
  params: {
    termo: string;
  };
};

type ResultadoBusca = {
  organic_results: [
    {
      position: number;
      title: string;
      link: string;
      thumbnail: string;
      snippet: string;
    }
  ];
};

const buscar = async (termo: string) => {
  const res = await fetch(
    `https://serpapi.com/search.json?q=${termo}&api_key=${process.env.API_SERP_KEY}`
  );

  const data: ResultadoBusca = await res.json();
  return data;
};

async function BuscaTermo({ params: { termo } }: PageProps) {
  const resultados = await buscar(termo);

  return (
    <div>
      <p className='text-gray-400 text-sm'>Voce buscou por: {termo}</p>

      <ol className='space-y-5 p-5'>
        {resultados?.organic_results.map(result => (
          <li key={result.position} className='list-decimal'>
            <p className='font-bold'>{result.title}</p>
            <p>{result.snippet}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default BuscaTermo;
