import Image from 'next/image'
import React from 'react'
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCercle from './BackgroundCercle'
import Link from 'next/link'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'
import {motion} from "framer-motion"

type Props = {pageInfo :PageInfo}

function Hero({pageInfo}: Props) {
    const [text, count] = useTypewriter({
        words:[ `Hi, My Name is ${pageInfo?.name}","Guy-who-loves-Coffee.tsx", "<ButLovesToCodeMore/>`],
        loop:true,
        delaySpeed:4000
    })
  return (
    <div className='h-screen flex flex-col items-center space-y-8 justify-center text-center overflow-hidden'>
        <BackgroundCercle/>
        <motion.img src={urlFor(pageInfo?.heroImage).url() }alt='ss' width={128} height={128} className='relative rounded-full mx-auto object-cover w-32 h-32 '/>
       <div className='z-20'>
        <h2 className=' text-sm uppercase text-gray-500 pb-2 tracking-[15px]'> {pageInfo?.role}</h2>
       <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
        <span className='mr-3'>{text}</span>
        <Cursor cursorColor='#F7AB0A'/>
        </h1>
        <div>

            <Link href="#about">
            <button className='heroButton'>About</button>
            </Link>

            <Link href={"#experiences"}>
            <button className='heroButton'>Experience</button>
            </Link>

            <Link href="#skills">
            <button className='heroButton'>Skills</button>
            </Link>

            <Link href="#projects">
            <button className='heroButton'>Projects</button>
            </Link>

            <Link href="#contact">
            <button className='heroButton'>Contact</button>
            </Link>

        </div>
       </div>
        
    </div>
  )
}

export default Hero