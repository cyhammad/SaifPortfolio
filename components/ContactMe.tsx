import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

type Props = {}

export default function ContactMe({}: Props) {
    const {register, handleSubmit} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:saif.alvey@gmail.com?&body=Hi, my name is ${formData.name}.\nSubject: ${formData.subject}\n${formData.message}\n(${formData.email})`;
    };
  return (
    <div className='h-screen flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center relative'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Contact
        </h3>

        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center'>I have got just what you need.{" "}<span className='underline decoration-[#F7AB0A]/50'>Lets Talk.</span></h4>

            <div className='space-y-10'>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                    <p className='text-2xl'>+92 335 5875508</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                    <p className='text-2xl'>saif.alvey@gmail.com</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                    <p className='text-2xl'>H.no 21, St.no 23, BLOCK D, Punjab Housing Socitey Adyala Road Rawalpindi</p>
                </div>
            </div>

            <form className='flex flex-col space-y-2 w-fit mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <div className='flex space-x-2'>
                    <input {...register('name')} className='contactInput' placeholder='Name' type="text" />
                    <input {...register('email')} className='contactInput' placeholder='Email' type="email" />
                </div>
                <input {...register('subject')} className='contactInput' placeholder='Subject' type="text" />
                <textarea {...register('message')} className='contactInput' placeholder='Message' />
                <button className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg">Submit</button>
            </form>

        </div>
    </div>
  )
}