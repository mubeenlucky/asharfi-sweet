import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Cake = () => {
  return (
    <div><section className="text-black ol-h font-bold bg-red-950 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4">
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a className="block relative h-48 rounded overflow-hidden">
            <Image
              alt="cake"
              className="object-cover object-center w-full h-full block"
              src={"/cake1.jpeg"}
              width={600}
              height={600}
              ></Image>
          </a>
          <div className="mt-4">
            <h3 className="text-red-950font-bold text-xs tracking-widest title-font mb-1">
              CATEGORY
            </h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">
              strawberry cake
            </h2>
            <p className="mt-1">$16.00</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a className="block relative h-48 rounded overflow-hidden">
          <Image
              alt="cake"
              className="object-cover object-center w-full h-full block"
              src={"/cake2.jpeg"}
              width={600}
              height={600}
              ></Image>
          </a>
          <div className="mt-4">
            <h3 className="text-red-950 font-boldtext-xs tracking-widest title-font mb-1">
              CATEGORY
            </h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">
              chocolate cake
            </h2>
            <p className="mt-1">$21.15</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a className="block relative h-48 rounded overflow-hidden">
          <Image
              alt="cake"
              className="object-cover object-center w-full h-full block"
              src={"/cake3.jpeg"}
              width={600}
              height={600}
              ></Image>
          </a>
          <div className="mt-4">
            <h3 className="text-red-950 font-bold text-xs tracking-widest title-font mb-1">
              CATEGORY
            </h3>
            <h2 className="text-gray-900 title-fonttext-lg font-medium">
              oreo cake
            </h2>
            <p className="mt-1">$12.00</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a className="block relative h-48 rounded overflow-hidden">
          <Image
              alt="cake"
              className="object-cover object-center w-full h-full block"
              src={"/cake6.jpeg"}
              width={600}
              height={600}
              ></Image>
          </a>
          <div className="mt-4">
            <h3 className="text-red-950 font-boldtext-xs tracking-widest title-font mb-1">
              CATEGORY
            </h3>
            <h2 className="text-gray-900 title-fonttext-lg font-medium">
              ice Cake
            </h2>
            <p className="mt-1">$18.40</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a className="block relative h-48 rounded overflow-hidden">
          <Image
              alt="cake"
              className="object-cover object-center w-full h-full block"
              src={"/cake7.jpeg"}
              width={600}
              height={600}
              ></Image>
          </a>
          <div className="mt-4">
            <h3 className="text-red-950 font-boldtext-xs tracking-widest title-font mb-1">
              CATEGORY
            </h3>
            <h2 className="text-gray-900 title-fonttext-lg font-medium">
              coffee cake
            </h2>
            <p className="mt-1">$16.00</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a className="block relative h-48 rounded overflow-hidden">
          <Image
              alt="cake"
              className="object-cover object-center w-full h-full block"
              src={"/cake8.jpeg"}
              width={600}
              height={600}
              ></Image>
          </a>
          <div className="mt-4">
            <h3 className="text-red-950 font-boldtext-xs tracking-widest title-font mb-1">
              CATEGORY
            </h3>
            <h2 className="text-gray-900 title-fonttext-lg font-medium">
              birthday cake
            </h2>
            <p className="mt-1">$21.15</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a className="block relative h-48 rounded overflow-hidden">
          <Image
              alt="cake"
              className="object-cover object-center w-full h-full block"
              src={"/cake5.jpeg"}
              width={600}
              height={600}
              ></Image>
          </a>
          <div className="mt-4">
            <h3 className="text-red-950 font-boldtext-xs tracking-widest title-font mb-1">
              CATEGORY
            </h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">
              cheese cake
            </h2>
            <p className="mt-1">$12.00</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a className="block relative h-48 rounded overflow-hidden">
          <Image
              alt="cake"
              className="object-cover object-center w-full h-full block"
              src={"/cake4.jpeg"}
              width={600}
              height={600}
              ></Image>
          </a>
          <div className="mt-4">
            <h3 className="text-red-950 font-boldtext-xs tracking-widest title-font mb-1">
              CATEGORY
            </h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">
              potato cake
            </h2>
            <p className="mt-1">$18.40</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default Cake