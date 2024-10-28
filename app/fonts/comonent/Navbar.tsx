 "use client"; // Ensure this is a client component

 import Image from 'next/image' 
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';


 const Navbar = () => {

    const router = useRouter();
  
  return (
    <div >
      <header className="text-gray-600  bg-orange-950 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-orange-50 mb-4 md:mb-0">
        
      <Image src={"/ashrafi logo.jpeg"}
        width={50 }
        height={50}
        alt='ashrafi'
        className='w-50px'

        ></Image>
        <span className="ml-3 text-xl">Ashrafi Sweets </span>
      </a>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} className="mr-5 hover: text-orange-50">About</Link> 
        <Link href={"/cake"}  className="mr-5 hover: text-orange-50">cake</Link>
        <Link  href={"/nimko"} className="mr-5 hover: text-orange-50">Nimko</Link> 
        <Link href={"/contact"} className="mr-5 hover: text-orange-50">contact</Link> 
      </nav>
      <button onClick={()=>router.push("/discount")} className="inline-flex items-center bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
        discount for DIWALI🍩
      
      </button>
    </div>
  </header>
  </div>
  )
} 
export default Navbar





