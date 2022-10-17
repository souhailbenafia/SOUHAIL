
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {groq} from "next-sanity"
import {PageInfo} from "../../typings"
 import { SanityClient} from "../../sanity"




const query = groq`
 *[_type == "pageInfo"][0]
`;

type Data = {
  pageInfo: PageInfo ;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const pageInfo : PageInfo = await SanityClient.fetch(query)
  res.status(200).json({ pageInfo})
}
