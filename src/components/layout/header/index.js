/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import NextLink from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import {
  MenuIcon,
  XIcon,
} from '@heroicons/react/outline';


export default function Example() {

  return (
    <Popover className="relative bg-white">
      <div
        className="absolute inset-0 shadow z-30 pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative z-20">
        <div className="max-w-7xl mx-auto flex justify-around items-center px-4  sm:px-6 sm:py-4 lg:px-8 lg:justify-start lg:space-x-10">
          <div>
            <NextLink href="/" className="flex">

              <span className="sr-only">TEACHLANCER™</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="/img/logo.png"
                alt="teach lancer"
              />
            </NextLink>
          </div>
          <div className="-mr-2 -my-2 lg:hidden">
            <Popover.Button className="bg-white rounded-lg p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#3DC0DF]">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden lg:flex-1 lg:flex lg:items-center lg:justify-end">
            <div className="flex  items-center lg:ml-12">
              <NextLink
                    href="/sales-academy"
                    className=" text-[14px] text-[#3DC0DF] xl:text-[18px] lg:text-[15px]  md:text-[10px]text-[18px] font-extrabold xl:px-[15px] xl:py-[6px] xl:block md:hidden block border-2 border-[#3DC0DF] rounded-[5px] hover:bg-[#3DC0DF] hover:text-[#fff]">

                    SALES TALENT

                  </NextLink>
                  <NextLink
                    href="/company"
                    className="text-[14px] ml-[10px] text-[#fff] xl:text-[18px] lg:text-[15px] md:text-[10px] text-[18px] font-extrabold xl:px-[15px] xl:py-[6px] xl:py-[6px] xl:block md:hidden block border-2 bg-[#3DC0DF] border-[#3DC0DF] rounded-[5px] hover:bg-[#fff] hover:text-[#3DC0DF]">

                    COMPANY

                  </NextLink>
            </div>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5 sm:pb-8">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="/img/Main Logo.png"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-lg p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#3DC0DF]">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            
            </div>
            <div className="py-6 px-5">
              <div className="grid grid-cols-1 gap-4">
                <NextLink
                  href="/sales-academy"
                  className="rounded-lg  py-2  hover:bg-[#3DC0DF] flex justify-center text-[14px] text-[#3DC0DF] font-extrabold px-[20px] py-[6px] border-2 border-[#3DC0DF] rounded-[10px]  hover:text-[#FFF]">

                  SALES TALENT

                </NextLink>
              </div>
              <div className="mt-6">
                <NextLink
                  href="/company"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-[#3DC0DF] hover:bg-[#FFF]">

                  COMPANY
                </NextLink>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
