import { NextApiRequest, NextApiResponse } from "next";

import Stripe from "stripe";

import { stripe, prisma } from "@services";

export default async(request: NextApiRequest, response: NextApiResponse) => {
  const { product_id } = request.query;

  if(request.method === 'GET' && request.url === `/api/product?product_id=${product_id}`){
    return prisma.product.findFirst({
      where: {
        id: `${product_id}`
      },
      include: {
        files: {
          select: { name: true, file: true }
        },
        category: {
          select: { name: true }
        },
        sellers: {
          select: { id: true }
        }
      }
    })
      .then(success => response.status(201).json(success))
      .catch((err) => {
        throw new Error(err)
      })
  };

  // show all products
  if(request.method === 'GET' && request.url === '/api/product'){
    const res = await prisma.product.findMany({
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
    const { name, description, price, thumbnail, stripe_price_id, stripe_product_id, category_id, files } = request.body;

    return prisma.product.create({
      data:{ name, description, price, thumbnail, stripe_price_id, stripe_product_id, category_id }
    })
      .then(success => {
        for (const key in files) {
          if (Object.prototype.hasOwnProperty.call(files, key)) {
            const element = files[key];
            prisma.files.create({
              data: {
                file: element.file,
                name: `${name}_${key}`,
                product_id: success.id
              }
            })
              .then(success => response.status(201).json({ message: 'Product created successfully' }))
          }
        }

        // return response.status(201).json({
        //   array: array,
        //   product_id: success.id,
        //   message: 'Product created successfully'
        // })
      })
      .catch(({ code, ...rest }) => {
        return response.status(404).json({ rest })
        // if(code === 'P2003'){
        //   return response.status(404).json({ message: 'Category not found' })
        // };
      })
  };

  if(request.method === 'PUT'){
    const { stripe_id, price_id, thumbnail } = request.body;

    return prisma.product.update({
      where: {
        id: `${product_id}`
      },
      data: {
        thumbnail
      }
    })
    .then(success => {

      return response.status(201).json({
        success: success,
        message: 'Product edited successfully'
      })
    })
    .catch(({ code, ...rest }) => {
      return response.status(404).json({ rest })
      // if(code === 'P2003'){
      //   return response.status(404).json({ message: 'Category not found' })
      // };
    })
  };

  if(request.method === 'DELETE'){
    return prisma.product.delete({
      where: {
        id: `${product_id}`
      }
    })
    .then(success => response.status(201).json({ message: 'Product deleted successfully' }))
  };

  return response.status(405).json({ error: 'Method Not Allowed' })
};
