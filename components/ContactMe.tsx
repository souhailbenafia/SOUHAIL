import React from 'react'


import {PhoneIcon,MapIcon, EnvelopeIcon} from '@heroicons/react/24/solid'
import { useForm,SubmitHandler } from 'react-hook-form';
import { PageInfo } from '../typings';

type Inputs ={
    name: string,
    email:string,
    subject: string,
    message: string
}
type Props = {pageInfo : PageInfo}

function ContactMe({pageInfo}: Props) {
    const { register, handleSubmit } = useForm<Inputs>();
    
    const onSubmit: SubmitHandler<Inputs> = (FormData) =>{
        window.location.href =`mailto:souhail.benafia@yahoo.fr?subject=${FormData.subject}&body=Hi,my name is ${FormData.name}. ${FormData.message} ${FormData.email}`;
    };
  return (
    <div className=' h-fit flex relative flex-col text-center md:text-left  max-w-7xl px-10 justify-evenly mx-auto items-center  '>
        <h3 className='absolute top-14 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>

        <div className=' relative flex flex-col space-y-10 justify-center items-start mt-40 mb-10'>
            <h4 className='text-4xl font-semibold text-center '> I have got just what you need .{""}
            <span className=' decoration-[#F7AB0A]/50 underline'> Lets Talk</span>
            </h4>
        </div>
        <div  className=" space-y-10 md:flex-row justify-center items-center">
            <div className=' flex items-center space-x-5 justify-center'>
                <PhoneIcon className=" text-[#F7AB0A] h-7 w-7 animate-pulse"/>
                <p className='text-2xl'> +216 {pageInfo.phoneNum}</p>
            </div>
            <div className=' flex items-center space-x-5 justify-center'>
                <EnvelopeIcon className=" text-[#F7AB0A] h-7 w-7 animate-pulse"/>
                <p className='text-2xl'> {pageInfo.email}</p>
            </div>
            <div className=' flex items-center space-x-5 justify-center'>
                <MapIcon className=" text-[#F7AB0A] h-7 w-7 animate-pulse"/>
                <p className='text-2xl'> {pageInfo.address}</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'  >
                <div className=' w-full space-y-2 md:flex md:space-x-5 md:space-y-0'>
                    <input {...register('name')} placeholder='Name' className='  w-full contactinput' type="text" />
                    <input  {...register('email')} placeholder='Email' className='contactinput w-full'  type="email" />
                </div>
                <input {...register('subject')} className='contactinput' placeholder='Subject' type="text" />
                <textarea  {...register('message')} placeholder='Message'  className='contactinput' name="message" id="" ></textarea>
                <button type='submit' className=' bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
            </form>
            
        </div>
    </div>
  )
}

export default ContactMe