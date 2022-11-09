import Busca from './Busca';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='flex space-x-4 divide-x-2 p-5'>
      <div>
        <h1>Busca</h1>
        <div className='flex-1 pl-5'>
          <Busca />
        </div>
      </div>
      <div>{children}</div>
    </main>
  );
}
