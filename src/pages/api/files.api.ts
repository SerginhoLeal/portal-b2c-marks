import { NextApiRequest, NextApiResponse } from "next";

import Stripe from "stripe";

import { stripe } from "@services";
import { prisma } from "@/services/prisma";

export default async(request: NextApiRequest, response: NextApiResponse) => {
  if(request.method === 'GET'){
    const data = await prisma.files.findMany();

    return response.status(201).json(data);
  };

  if(request.method === 'POST'){
    const { file, name, product_id } = request.body;

    return prisma.files.create({
      data: {
        file,
        name,
        product_id
      }
    })
      .then(success => response.status(201).json({ message: 'File created successfully' }))
      .catch(({ name, code, clientVersion, meta: { file_name } }) => {
        if(code === 'P2003'){
          return response.status(404).json({ message: 'Product not found' })
        };
      })
  };

  return response.status(405).json({ error: 'Method Not Allowed' })
};
