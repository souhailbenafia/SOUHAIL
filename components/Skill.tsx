import React from 'react'
import {motion} from "framer-motion"
import { Skill } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    directionLeft?: boolean;
    skill: Skill
  };

function Skill({directionLeft,skill}: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        
        transition={{ duration: 1 }}
        className="rounded-full border border-gray-500 object-cover  w-14 h-14 xl:w-32 xl:h-32 filter md:w-28 md:h-28 group-hover:grayscale transition duration-300 ease-in-out"
        src={urlFor(skill?.image).url()}
        alt=""
      />
      <div className="absolute opacity-0 group-hover:opacity-80  transition duration-300 ease-in-out group-hover:bg-white h-14 w-14 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className=" text-xl md:text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  )
}


export default Skill