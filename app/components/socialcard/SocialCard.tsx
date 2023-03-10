import React from 'react'
import Image from 'next/image'

const SocialCard({
    href, title, image
  }: { href: string, title: string, image?: string }) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="flex items-center p-2 rounded-sm shadow-lg hover:shadow-xl hover:bg-orange-600 transition-shadow duration-300 my-4 sm:w-4/5 md:w-4/6 lg:w-3/6 bg-slate-200">
        <div className='flex items-center justify-evenly'>
          <Image
            className='my-0 mr-8 border-r-2 border-orange-600'
            width="56"
            height="56"
            alt={data.name}
            src={data.avatar}
            />
          <h2 className='font-bold text-lg text-slate-800 uppercase'>{title} - <span className='text-base font-light'>social</span></h2>
        </div>
      </a>
    )
  }

export default SocialCard