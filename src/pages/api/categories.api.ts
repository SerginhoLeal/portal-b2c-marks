import Stripe from "stripe";
import { stripe, prisma } from "@services";
import { NextApiRequest, NextApiResponse } from "next";

export default async function categories(request: NextApiRequest, response: NextApiResponse){
  if(request.method === 'GET'){
    const res = await prisma.category.findMany();

    return response.status(201).json(res);
  };

  if(request.method === 'POST'){
    const { name } = request.body;

    return prisma.category.create({
      data: {
        name
      }
    })
      .then(success => response.status(201).json({ message: 'Category created successfully' }))
      .catch(({ name, code, clientVersion, meta: { file_name } }) => {
        if(code === 'P2003'){
          return response.status(404).json({ message: 'Product not found' })
        };
      })
  };
};

// export default async function categories(request: NextApiRequest, response: NextApiResponse){
//   if(request.method !== 'GET'){
//     return response.status(405).json({ error: 'Method Not Allowed' })
//   };

//   const { data } = await stripe.products.list({
//     expand: [ 'data.default_price' ],
//     limit: 4,
//     active: true,
//     // starting_after,
//     // starting_after: 'prod_OCBqoGw0F6qOJb',
//     // ending_before: '9',
//   });

//   const newProducts = data.map(product => {
//     const price = product.default_price as Stripe.Price;
//     const unit_amount = price.unit_amount ? price.unit_amount : 0;

//     return {
//       id: product.id,
//       name: product.name,
//       image: product.images[0],
//       price: new Intl.NumberFormat('pt-BR', {
//         style: 'currency',
//         currency: 'BRL'
//       }).format(unit_amount / 100)
//     }
//   });

//   const result = { newProducts };

//   return response.status(201).json(result)
// };
