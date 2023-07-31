import { NextApiRequest, NextApiResponse } from "next";
import filter_json from '../../../json/filter.json';

export default async function filter(request: NextApiRequest, response: NextApiResponse){
  if(request.method !== 'GET'){
    return response.status(405).json({ error: 'Method Not Allowed' })
  };

  const options = filter_json.map(first => {
    const filter = first.options.filter(fil => !!fil.stock);

    return {
      title: first.title,
      options: filter
    }
  });

  return response.status(201).json(options) 
};
