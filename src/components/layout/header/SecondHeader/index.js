/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from 'react'
import NextLink from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import {
    MenuIcon,
    XIcon,
} from '@heroicons/react/outline'
import { Dropdown } from "@nextui-org/react";
import Cookies from "js-cookie";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { fetchUserView } from "../../../../store/action/user/GetData"
import { connect } from 'react-redux';


const solutions = [
    {
        name: 'Home',
        href: '/sales-academy',
    },
    {
        name: 'courses',
        href: '/view-courses',
    },
    {
        name: 'Job',
        href: '/view-job',
    },
    {
        name: 'Internship',
        href: '/view-internship',
    },
    {
        name: 'Contact',
        href: '/contacts',
    },
    {
        name:"Chat",
        href:"/messages"
    }
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function SecondHeader({ dispatch, userres }) {

    const [token, setToken] = useState("");
    const [name, setName] = useState("");
    const [value, setvalue] = useState(false);

    useEffect(() => {
        setToken(Cookies.get('token'));
    }, []);

    useEffect(() => {
        token && dispatch(fetchUserView());
    }, [token])

    useEffect(() => {
        const data = userres.data && userres.data.data && userres.data.data.data && userres.data.data.data;
        data && setName(data);
    }, [userres])

    const logout = () => {
        Cookies.remove("token");
        Cookies.remove("userId")
        setName("");
        window.location = "/";

    }

    return (
        <Popover className="relative bg-white">
            <div
                className="absolute inset-0 shadow z-30 pointer-events-none"
                aria-hidden="true"
            />
            <div className="relative z-20">
                <div className="max-w-7xl mx-auto flex justify-between items-center px-4  sm:px-6 sm:py-3 lg:px-8 lg:justify-start lg:space-x-10">
                    <div>
                        <NextLink href="/" className="flex">

                            <span className="sr-only">TEACHLANCER™</span>
                            <img
                                className="h-8 w-auto sm:h-10"
                                src="/img/logo.png"
                                alt="teach lance"
                            />
                        </NextLink>
                    </div>
                    <div className="-mr-2 -my-2 lg:hidden">
                        <Popover.Button className="bg-white rounded-lg p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#3DC0DF]">
                            <span className="sr-only">Open menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    <div className="hidden lg:flex-1 lg:flex lg:items-center lg:justify-center">

                        <Popover.Group as="nav" className="xl:ml-32 flex space-x-10">
                            <Popover>
                                {({ open }) => (
                                    <>
                                        <div
                                            className={classNames(
                                                open ? 'text-[#000000]' : 'text-[#000000]',
                                                'group mt-1 mr-3 inline-flex items-center xl:text-[18px] lg:text-[15px] text-[18px] font-medium hover:text-gray-900 border-b-2 border-[#fff] hover:border-b-2 hover:border-[#3DC0DF]',
                                            )}
                                        >
                                            <span><NextLink href='/sales-academy' className='no-underline text-[#000] hover:text-gray-700'>Home</NextLink></span>
                                        </div>
                                    </>
                                )}
                            </Popover>
                            <Popover>
                                {({ open }) => (
                                    <>
                                        <div
                                            className={classNames(
                                                open ? 'text-[#000000]' : 'text-[#000000]',
                                                'group mt-1 mr-3 inline-flex items-center xl:text-[18px] lg:text-[15px] text-[18px] font-medium hover:text-gray-900 border-b-2 border-[#fff] hover:border-b-2 hover:border-[#3DC0DF]',
                                            )}
                                        >
                                            <span><NextLink href='/course-video' className='no-underline text-[#000] hover:text-gray-700'>Videos</NextLink></span>
                                        </div>
                                    </>
                                )}
                            </Popover>

                            <Popover>
                                {({ open }) => (
                                    <>
                                        <div
                                            className={classNames(
                                                open ? 'text-[#000000]' : 'text-[#000000]',
                                                'group mt-1  mr-3 inline-flex items-center xl:text-[18px] lg:text-[15px] md:text-[10px]  text-[18px] text-base font-medium hover:text-gray-900 hover:border-b-2 hover:border-[#3DC0DF]',
                                            )}
                                        >
                                            <div className='revative'>
                                                <span className='flex'><p className='no-underline text-[#000] hover:text-gray-700 cursor-pointer hover:text-[#000]' onClick={() => setvalue(!value)}>Work<ArrowDropDownIcon/></p></span>
                                                <div className='absolute top-12 z-20 bg-[#fff]  border-2 rounded-md shadow-lg '>
                                                    {
                                                        value && <ul>
                                                            <li className='hover:bg-slate-300  px-5 py-1 text-[#000] hover:text-[#000] '><NextLink href='/view-job' className='' >Job</NextLink></li>
                                                            <li className='hover:bg-slate-300  px-5 py-1 text-[#000] hover:text-[#000] '><NextLink href='/view-internship' className='' >internship</NextLink></li>
                                                        </ul>
                                                    }
                                                </div>
                                            </div>

                                        </div>
                                    </>
                                )}
                            </Popover>
                            <Popover>
                                {({ open }) => (
                                    <>
                                        <div
                                            className={classNames(
                                                open ? 'text-[#000000]' : 'text-[#000000]',
                                                'group mt-1 mr-3 inline-flex items-center xl:text-[18px] lg:text-[15px] md:text-[10px] text-[18px] text-base font-medium hover:text-gray-900  hover:border-b-2 border-[#3DC0DF]',
                                            )}
                                        >
                                           <span><NextLink href="/contacts" className='no-underline text-[#000] hover:text-gray-700'>Contact</NextLink></span>

                                        </div>
                                    </>
                                )}
                            </Popover>
                            <Popover>
                                {({ open }) => (
                                    <>
                                        <div
                                            className={classNames(
                                                open ? 'text-[#000000]' : 'text-[#000000]',
                                                'group mt-1 mr-3 inline-flex items-center xl:text-[18px] lg:text-[15px] md:text-[10px] text-[18px] text-base font-medium hover:text-gray-900  hover:border-b-2 border-[#3DC0DF]',
                                            )}
                                        >
                                           <span><NextLink href="/messages" className='no-underline text-[#000] hover:text-gray-700'>Chat</NextLink></span>

                                        </div>
                                    </>
                                )}
                            </Popover>
                        </Popover.Group>

                        {
                            name ? <div className="flex  items-center lg:justify-end ml-auto"><Dropdown classNames="ml-10 justify-end">
                                <Dropdown.Button flat>{
                                    <div className='ml-[70px] text-[#000] text-[18px] mb-3 group  mr-3 inline-flex items-center xl:text-[18px] lg:text-[15px] md:text-[10px] text-[18px] text-base font-medium hover:text-gray-900  hover:border-b-2 border-[#3DC0DF] capitalize'><div className='flex justify-end'><img src={name.profile} alt="" className='w-[30px] h-[30px] mr-2 rounded-full capitalize' /></div><p>{name.first_name}</p></div>
                                }</Dropdown.Button>
                                <Dropdown.Menu aria-label="Static Actions">
                                    <Dropdown.Item> {
                                        <span><NextLink href="/student-dashboard" className='no-underline text-[#000] hover:text-gray-700'>Dashboard</NextLink></span>
                                    }</Dropdown.Item>
                                    <Dropdown.Item ><button onClick={logout}>logout</button></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown></div> : <>


                                <div className="flex  items-center lg:justify-end ml-auto">

                                    <div className=''>
                                        <NextLink
                                            href="/student-login"
                                            className=" text-[14px] no-underline text-[#3DC0DF] xl:text-[18px] lg:text-[15px]  md:text-[10px]text-[18px] font-extrabold lg:px-[15px] xl:py-[6px] xl:block block border-2 border-[#3DC0DF] rounded-[5px] hover:bg-[#3DC0DF] hover:text-[#fff]">

                                            Login

                                        </NextLink>

                                    </div>
                                    <div>
                                        <NextLink
                                            href="/student-signup"
                                            className="text-[14px] no-underline ml-[10px] text-[#fff] xl:text-[18px] lg:text-[15px] md:text-[10px] text-[18px] font-extrabold lg:px-[15px] xl:py-[6px] xl:py-[6px] xl:block  block border-2 bg-[#3DC0DF] border-[#3DC0DF] rounded-[5px] hover:bg-[#fff] hover:text-[#3DC0DF]">

                                            Sign up

                                        </NextLink>
                                    </div>
                                </div>
                            </>
                        }

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
                            <div className="mt-6 sm:mt-8">
                                <nav>
                                    <div className="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                                        {solutions.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50 uppercase"
                                            >

                                                <div className="ml-4 text-base font-medium text-gray-900 uppercase">
                                                    {item.name}
                                                </div>
                                            </a>
                                        ))}
                                    </div>

                                </nav>
                            </div>
                        </div>
                        <div className="py-6 px-5">
                            {
                                name ? <div className="flex"><Dropdown classNames="ml-10 ">
                                    <Dropdown.Button flat>{
                                        <div className=' text-[#000] text-[18px] mb-3 group  mr-3 inline-flex items-center xl:text-[18px] lg:text-[15px] md:text-[10px] text-[18px] text-base font-medium hover:text-gray-900  hover:border-b-2 border-[#3DC0DF]'><div className='flex justify-start w-[100%]'><img src={name.profile} alt="" className='w-[30px] h-[30px] mr-2 rounded-full' /><p className='text-[20px] mt-2 item-center'>{name.first_name}</p></div></div>
                                    }</Dropdown.Button>
                                    <Dropdown.Menu aria-label="Static Actions">
                                        <Dropdown.Item> {
                                            <span><NextLink href="/student-dashboard" className='no-underline text-[#000] hover:text-gray-700'>Dashboard</NextLink></span>
                                        }</Dropdown.Item>
                                        <Dropdown.Item ><button onClick={logout}>logout</button></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown></div> : <>


                                    <div className="flex  items-center lg:justify-end ml-auto">

                                        <div className=''>
                                            <NextLink
                                                href="/student-login"
                                                className=" text-[14px] no-underline text-[#3DC0DF] xl:text-[18px] lg:text-[15px]  md:text-[10px]text-[18px] font-extrabold lg:px-[15px] xl:py-[6px] xl:block block border-2 border-[#3DC0DF] rounded-[5px] hover:bg-[#3DC0DF] hover:text-[#fff]">

                                                Login

                                            </NextLink>

                                        </div>
                                        <div>
                                            <NextLink
                                                href="/student-signup"
                                                className="text-[14px] no-underline ml-[10px] text-[#fff] xl:text-[18px] lg:text-[15px] md:text-[10px] text-[18px] font-extrabold lg:px-[15px] xl:py-[6px] xl:py-[6px] xl:block  block border-2 bg-[#3DC0DF] border-[#3DC0DF] rounded-[5px] hover:bg-[#fff] hover:text-[#3DC0DF]">

                                                Sign up

                                            </NextLink>
                                        </div>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    );
}


const mapStateToProps = (state) => ({
    userres: state.fetchUserView
})
export default connect(mapStateToProps)(SecondHeader)