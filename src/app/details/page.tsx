import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

// Main functional component
export default function Page() {
  return (
    <div className="w-full flex">
      {/* Sidebar (hidden on small screens) */}
      <div className="first hidden sm:flex w-[25%]">

        <div className="max-w-md mx-auto bg-white p-4 rounded-lg shadow">
          {/* <!-- Type Filter --> */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3">Type</h2>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox text-blue-500" checked />
                <span className="ml-2">Sport (10)</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox text-blue-500" checked />
                <span className="ml-2">SUV (12)</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox text-blue-500" />
                <span className="ml-2">MPV (16)</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox text-blue-500" />
                <span className="ml-2">Sedan (20)</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox text-blue-500" />
                <span className="ml-2">Coupe (14)</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox text-blue-500" />
                <span className="ml-2">Hatchback (14)</span>
              </label>
            </div>
          </div>


          {/* <!-- Capacity Filter --> */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3">Capacity</h2>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox text-blue-500" checked />
                <span className="ml-2">2 Person (10)</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox text-blue-500" />
                <span className="ml-2">4 Person (14)</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox text-blue-500" />
                <span className="ml-2">6 Person (12)</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox text-blue-500" checked />
                <span className="ml-2">8 or More (16)</span>
              </label>
            </div>
          </div>

          {/* <!-- Price Filter --> */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Price</h2>
            <div className="flex items-center">
              <input type="range" className="w-full accent-blue-500" min="0" max="100" value="50" />
              <span className="ml-4 text-sm text-gray-700">Max. $100.00</span>
            </div>
          </div>
        </div>

      </div>

      {/* Main content area */}
      {/* ================================================ */}

      <div className="sec w-full sm:w-[75%] bg-[#f6f7f9] p-4 sm:p-6  flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
        <section className=" w-full flex flex-col md:flex-row gap-5  items-center justify-around">
          <div className="first flex flex-col gap-4 w-full  lg:max-w-[470px]  lg:max-h-[508px]">
            <div>
              <Image src={"/View.png"} alt="" width={492} height={360} />
            </div>
            <div className=" flex items-center justify-between gap-2 lg:gap-2">
              <Image src={"/View 1.png"} alt="" width={148} height={124} />
              <Image src={"/View 2.png"} alt="" width={148} height={124} />
              <Image src={"/View 3.png"} alt="" width={148} height={124} />
            </div>
          </div>
          <div className="flex flex-col w-full  lg:max-w-[492px] h-auto lg:max-h-[508px] bg-white justify-between rounded-xl shadow-md">
            <Image
              src={"/Detail Car (1).png"}
              alt="Detail Car"
              width={492}
              height={508}
              className="w-full h-auto rounded-t-xl object-cover"
            />

            <div className="p-4 flex  items-center gap-4">
              <div className="flex items-center justify-between w-full">
                <h1 className="font-bold text-lg sm:text-xl lg:text-2xl">
                  $80.00 /{" "}
                  <span className="text-gray-500 text-sm lg:text-base">
                    day $100.00
                  </span>
                </h1>
              </div>
              <Link href={"/payment"}>
                <button className="bg-[#3563e9] hover:bg-[#264ac6] transition-all p-3 sm:p-4 px-6 sm:px-10 text-nowrap  text-white rounded-md w-full max-w-[180px] text-center">
                  Rent Now
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* ======================================================== */}

      
    </div>
  );
}



