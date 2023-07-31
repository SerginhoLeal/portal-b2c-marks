import Stripe from "stripe";
import { stripe } from "@/services";
import { NextApiRequest, NextApiResponse } from "next";

export default async function products(request: NextApiRequest, response: NextApiResponse){
  const { starting_after } = request.body;

  if(request.method !== 'POST'){
    return response.status(405).json({ error: 'Method Not Allowed' })
  };

  const { data } = await stripe.products.list({
    expand: [ 'data.default_price' ],
    limit: 6,
    active: true,
    starting_after,
    // starting_after: 'prod_OCBqoGw0F6qOJb',
    // ending_before: '9',
  });

  const products = data.map(product => {
    const price = product.default_price as Stripe.Price;
    const unit_amount = price.unit_amount ? price.unit_amount : 0;

    return {
      id: product.id,
      name: product.name,
      image: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(unit_amount / 100)
    }
  });

  return response.status(201).json(products) 
};
