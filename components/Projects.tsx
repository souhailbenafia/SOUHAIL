import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="mt-10 md:mt-0 relative w-full flex overflow-x-scroll overflow-y-hidden snap-x  scrollbar-thin scrollbar-thumb-[#F7AB0A]/80 scrollbar-track-gray-400/20 snap-mandatory z-20">
        {projects?.map((project, index) => {
          return (
            <div
              key={index}
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
            >
              {project.image && (
                <motion.img
                  initial={{
                    y: -300,
                    opacity: 0,
                  }}
                  transition={{ duration: 1.2 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  src={urlFor(project?.image).url()}
                  alt="dd"
                  className='w-64 h-68 mt-20'
                />
              )}

              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-xl md:text-4xl font-semibold text-center">
                  {project.title}
                </h4>
                <div className="flex space-x-4 items-center justify-center">
                {
                  project.technologies.map(
                    (tech)=>{
                      return(
                        <motion.img key={tech.title}
                        src={urlFor(tech?.image).url()}
                        alt="dd"
                        className="w-10 h-10 rounded-full"/>
                      )
                    }
                  )
                }
                    </div>
                <p className="text-base text-center md:text-left">
                  {project.summary}
                </p>
              </div>
            </div>
          );
        })}
        <div></div>
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB01]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
