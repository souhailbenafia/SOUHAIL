import React from 'react'
import { motion } from "framer-motion";
import Skill  from "./Skill";
import { Skill as skillType } from '../typings';

type Props = {
  skills : skillType[]
}

function Skills({skills}: Props) {
  return (
    <motion.div className="flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen xl:space-y-0 mx-auto items-center justify-center">
    <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
      Skills
    </h3>

    <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">Hover over a skill for currency proficiency</h3>

    <div className=" relative mt-32 md:mt-28  grid grid-cols-1 md:grid-cols-6 gap-2  ">
     
    {
        skills.slice(0,skills.length /2).map((skill)=>{
          return (
            <Skill  key={skill._id} skill={skill}/>
           )
        })
    }

{
        skills.slice(skills.length/2,skills.length).map((skill)=>{
          return (
            <Skill  key={skill._id} skill={skill} directionLeft/>
           )
        })
    }
     
    </div>
  </motion.div>
  )
}

export default Skills