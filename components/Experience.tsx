import React from 'react'
import {motion} from 'framer-motion'
import ExperianceCard from './ExperienceCard'
import { Experience } from '../typings'
type Props = { 
  experiences: Experience[]
}

function Experiance({experiences}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className=" h-screen md:h-fit  flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute  top-16 uppercase tracking-[20px] text-gray-500 text-lg md:text-2xl  mb-2 md:mb-0 z-30">
        Experience
      </h3>

      <div className=" mt-28 h-5/6 w-full flex space-x-5 overflow-x-scroll p-10  snap-x snap-mandatory   scrollbar-thumb-[#F7AB0A]/80 scrollbar-track-gray-400/20 scrollbar-thin">
       {
        experiences?.map((experience) =>{
          return(
           <ExperianceCard key={experience._id} experience={experience}/>
          )  } )
       }
      </div>
    </motion.div>
  )
}

export default Experiance