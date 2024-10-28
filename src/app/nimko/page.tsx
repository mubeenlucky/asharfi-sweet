import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Nimko = () => {
  return (
    <div><section className="text-gray-600 ol-h body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4">
      

        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        
          <a className="block relative h-48 rounded overflow-hidden">
            <Image
              alt="nimko"
              className="object-cover object-center w-full h-full block"
              src={"/samosa1.jpeg"}
              width={600}
              height={600}
              ></Image>
          </a>
          <div className="mt-4 border-4 border-black bg-white pr-3">
            <h3 className="text-red-700 text-xs tracking-widest title-font mb-1">
              CATEGORY
            </h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">
              alo samosa
            </h2>
            <p className="mt-1">pkr 60</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a className="block relative h-48 rounded overflow-hidden">
          <Image
              alt="nimko"
              className="object-cover object-center w-full h-full block"
              src={"/nimko1.jpeg"}
              width={600}
              height={600}
              ></Image>
          </a>
          <div className="mt-4 border-4 border-black bg-white">
            <h3 className="text-red-700 text-xs tracking-widest title-font mb-1">
              CATEGORY
            </h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">
              mix nimko
            </h2>
            <p className="mt-1">pkr 200</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a className="block relative h-48 rounded overflow-hidden">
          <Image
              alt="nimko"
              className="object-cover object-center w-full h-full block"
              src={"/kachori1.jpeg"}
              width={600}
              height={600}
              ></Image>
          </a>
          <div className="mt-4 border-4 border-black bg-white">
            <h3 className="text-red-700 text-xs tracking-widest title-font mb-1">
              CATEGORY
            </h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">
              kachori
            </h2>
            <p className="mt-1">pkr 30</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a className="block relative h-48 rounded overflow-hidden">
          <Image
              alt="cake"
              className="object-cover object-center w-full h-full block"
              src={"/chiken1.jpeg"}
              width={600}
              height={600}
              ></Image>
          </a>
          <div className="mt-4 border-4 border-black bg-white">
            <h3 className="text-red-700 text-xs tracking-widest title-font mb-1">
              CATEGORY
            </h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">
              chiken samosa
            </h2>
            <p className="mt-1">pkr 40</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a className="block relative h-48 rounded overflow-hidden">
          <Image
              alt="nimko"
              className="object-cover object-center w-full h-full block"
              src={"/chiken roll.jpeg"}
              width={600}
              height={600}
              ></Image>
          </a>
          <div className="mt-4 border-4 border-black bg-white">
            <h3 className="text-red-700 text-xs tracking-widest title-font mb-1">
              CATEGORY
            </h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">
              chiken roll
            </h2>
            <p className="mt-1">pkr 60</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a className="block relative h-48 rounded overflow-hidden">
          <Image
              alt="cake"
              className="object-cover object-center w-full h-full block"
              src={"/petis.jpeg"}
              width={600}
              height={600}
              ></Image>
          </a>
          <div className="mt-4 border-4 border-black bg-white">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
              CATEGORY
            </h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">
            chiken petis
            </h2>
            <p className="mt-1">pkr 70</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a className="block relative h-48 rounded overflow-hidden">
          <Image
              alt="nimko"
              className="object-cover object-center w-full h-full block"
              src={"/namak.jpeg"}
              width={600}
              height={600}
              ></Image>
          </a>
          <div className="mt-4 border-4 border-black bg-white">
            <h3 className="text-red-700 text-xs tracking-widest title-font mb-1">
              CATEGORY
            </h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">
              Namak para
            </h2>
            <p className="mt-1">pkr 60</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a className="block relative h-48 rounded overflow-hidden">
          <Image
              alt="nimko"
              className="object-cover object-center w-full h-full block"
              src={"/chips.jpeg"}
              width={600}
              height={600}
              ></Image>
          </a>
          <div className="mt-4 border-4 border-black bg-white">
            <h3 className="text-red-700 font-bold text-xs tracking-widest title-font mb-1">
              CATEGORY
            </h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">
              chips
            </h2>
            <p className="mt-1">pkr 100</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default Nimko