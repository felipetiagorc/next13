import { PrismaClient } from '@prisma/client';

declare global {
  let cachePrisma: PrismaClient;
}

let prismaClient: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prismaClient = new PrismaClient();
} else {
  // cacheando se não-production:
  if (!global.cachePrisma) {
    global.cachePrisma = new PrismaClient();
  }
  prismaClient = global.cachePrisma;
}
export const db = prismaClient;
