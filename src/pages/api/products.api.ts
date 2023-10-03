import { NextApiRequest, NextApiResponse } from "next";

import Stripe from "stripe";

import { stripe, prisma } from "@services";

export default async(request: NextApiRequest, response: NextApiResponse) => {
  if(request.method === 'GET'){
    const res = await prisma.product.findMany({
      // where: {
      //   category: {
      //     // name: { }
      //   }
      // },
      orderBy: [
        {
          created_at: 'desc'
        }
      ],
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

  if(request.method === 'POST'){
    const { stripe_id, name, price, category_id, file } = request.body;
    const data = { stripe_id, category_id, name, price };

    return prisma.product.create({ data })
      .then(success => {


        prisma.files.create({
          data: {
            file,
            name: `${name}_thumbnail`,
            product_id: success.id
          }
        })

        return response.status(201).json({
          product_id: success.id,
          message: 'Product created successfully'
        })
      })
      .catch(({ code, ...rest }) => {
        if(code === 'P2003'){
          return response.status(404).json({ message: 'Category not found' })
        };
      })
  };

  return response.status(405).json({ error: 'Method Not Allowed' })
};
