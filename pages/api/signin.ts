// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { db } from '@lib/database';

type Data = {
  //
};

export default async function signIn(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    // acces database from prisma client

    const user = await db.user.findUnique();
  }
  res.status(200).json({ name: 'John Doe' });
}
