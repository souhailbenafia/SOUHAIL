
import type { NextApiRequest, NextApiResponse } from 'next'
import {groq} from "next-sanity"
import {Project} from "../../typings"
 import { SanityClient} from "../../sanity"


const query = groq`
 *[_type == "project"]{
  ...,
  technologies[]->
 }
`;

type Data = {
 projects: Project[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const projects : Project[]= await SanityClient.fetch(query)
  res.status(200).json({projects})
}
