"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'



const Hero = () => {
   const  router =useRouter()
  return (
    <div><section className=" text-cyan-800 font-bold bg-fixed bg-center bg-cover  custom-img body-font">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        Ashrafi Sweets
          <br className="hidden lg:inline-block" />
         Nimko and Bakers Mirpurkhas | Mithai Nimko 

        </h1>
        <div className= "w-[100px] h-[2px] bg-rose-700"></div>
        <p className="mb-8 leading-relaxed">
          



Welcome to [ashrafi sweet Bakery ]

At [ashrafi sweet Bakery], we believe that every bite should be a celebration! Nestled in the heart of [Your Location], our bakery offers a delightful array of handmade sweets and treats, crafted with love and the finest ingredients. From rich, decadent cakes and scrumptious pastries to traditional sweets, each creation is designed to bring joy to your taste buds.

Whether you’re looking for a special cake for a celebration, a sweet gift for a loved one, or just a little something to brighten your day, we have something for everyone. Join us in experiencing the magic of our freshly baked goods, where every recipe tells a story and every flavor is a memory.

Indulge in the sweetness of life at [ashrafi sweet Bakery]!

---


        </p>
        <div className="flex justify-center">
          <button onClick={()=>router.push("/contact")} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Button
          </button>
        
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
        <Image src={"/logo img.jpg"} width={500} height={500} alt='sweet' className='object-cover object-center rounded mx-auto w-[20rem] '></Image>
        
      </div>
    </div>
  </section>
  </div>
  )
}

export default Hero