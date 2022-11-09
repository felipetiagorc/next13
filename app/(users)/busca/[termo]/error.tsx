'use client';
import { useEffect } from 'react';

export default function Error({
  error,
  reset
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    //log error to an error reporting service
    console.log(error);
  }, [error]);

  return (
    <div>
      <p className='p-2 rounded-sm bg-red-600 text-white font-bold'>
        Algo deu errado !
      </p>
      <button
        onClick={() => {
          reset();
        }}
      >
        Limpar Erro
      </button>
    </div>
  );
}
