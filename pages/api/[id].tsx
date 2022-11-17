import type { NextApiRequest, NextApiResponse } from 'next';
import pokemon from '../../data/pokemon.json';

// type Pokemon = {
//     id: number,
//   name: string
// }

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<(typeof pokemon[number] & { image: string }) | undefined>
) {
  const p = pokemon.find(p => p.id === Number(req.query.id));
  res.status(200).json(
    p
      ? {
          ...p,
          image: `/${p.name.toLowerCase()}.jpg`
        }
      : undefined
  );
}
