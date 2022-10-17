import { Technology } from '../../typings';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {groq} from "next-sanity"
import {Experience} from "../../typings"
 import { SanityClient} from "../../sanity"




const query = groq`
 *[_type == "experience"]{
  ...,
  technologies[]->
 }
`;

type Data = {
 experiences: Experience[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const experiences : Experience[]= await SanityClient.fetch(query)
  res.status(200).json({experiences})
}
