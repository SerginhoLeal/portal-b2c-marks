import { NextApiRequest, NextApiResponse } from "next";

import Stripe from "stripe";

import { stripe, prisma } from "@services";

export default async(request: NextApiRequest, response: NextApiResponse) => {
  const { product_id } = request.query;
  
  if(request.method === 'GET'){
    const res = await prisma.product.findMany({
      where: {
        id: `${product_id}`
      },
      include: {
        files: {
          select: {
            name: true,
            file: true
          }
        },
        category: {
          select: {
            name: true
          }
        },
        sellers: {
          select: {
            id: true
          }
        }
      }
    });

    return response.status(201).json(res);
  };

  return response.status(405).json({ error: 'Method Not Allowed' })
};
