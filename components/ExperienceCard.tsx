import Image from 'next/image'
import React from 'react'
import Img from '../assets/img.jpg'
import reacti from "../assets/react.svg"
import {motion} from 'framer-motion'
import { Experience } from '../typings'
import { urlFor } from '../sanity'
type Props = {experience : Experience }

function ExperianceCard({experience}: Props) {
  return (
    <article className="relartive flex flex-col  rounded-lg items-center space-y-3 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="w-16 h-16 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
        src={urlFor(experience.companyImage).url()}
        alt="ffffffff"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience.company}</p>
        <div className="flex space-x-2 my-2">
       {
        experience?.technologies?.map((techno) =>{
          return (
            <motion.img key={techno._id}
            className="w-10 h-10 rounded-full"
            src={urlFor(techno?.image).url()}
            alt=""
          />
          )
        })
       }
          {/* Tech used */}
        </div>
        <p className="uppercase py-5 text-gray-300">{new Date(experience.dateStarted).toDateString()} - {new Date(experience.dateEnd).toDateString()}</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">

          {
            experience?.points.map(
              point=>{
                return <li key={point}>
                  {point}

                </li>
              }
            )
          }
        </ul>
      </div>
    </article>
  )
}

export default ExperianceCard