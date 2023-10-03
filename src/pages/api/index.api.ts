import { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "@services";

export default async(request: NextApiRequest, response: NextApiResponse) => {
  if(request.method === 'GET'){
    const recently = await prisma.product.findMany({
      take: 4,
      orderBy: {
        created_at: 'desc'
      },
      include: {
        files: {
          select: {
            name: true,
            file: true
          }
        }
      }
    });

    const best_seller = await prisma.product.findMany({
      take: 4,
      orderBy: {
        created_at: 'asc'
      },
      include: {
        files: {
          select: {
            name: true,
            file: true
          }
        }
      }
    });

    return response.status(201).json({ recently, best_seller })
  };

  return response.status(405).json({ error: 'Method Not Allowed' })
};
