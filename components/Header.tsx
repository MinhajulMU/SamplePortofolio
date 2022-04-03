import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Header() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <div>
            <header className="w-full h-24	bg-white py-6 fixed z-20 top-0	">
                <div className="container mx-auto">
                    <nav className="relative">
                        <div className="container mx-auto flex flex-wrap items-center justify-between">
                            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                                <Link href="/">
                                    <a
                                    >
                                        <Image src="/assets/images/logo.png" alt="MinhajCode Logo" width={167} height={44} />
                                    </a>
                                </Link>

                                <button
                                    className="text-gray-700 cursor-pointer text-xl leading-none px-3 py-1  bg-transparent block lg:hidden outline-none focus:outline-none"
                                    type="button"
                                    onClick={() => setNavbarOpen(!navbarOpen)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                            <div
                                className={
                                    "lg:flex flex-grow items-center" +
                                    (navbarOpen ? " flex" : " hidden")
                                }
                            >
                                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto bg-white w-full justify-end border border-gray-200 border-solid pb-4 md:border-none md:pb-0 mt-5 md:mt-0 z-20	">
                                    <li className="md:ml-14 text-center py-4 md:py-0">
                                        <Link href="/">
                                            <a
                                                className="font-semibold text-[#333333] text-base hover:text-[#FF6C20]">
                                                Home
                                            </a>
                                        </Link>

                                    </li>
                                    <li className="md:ml-14 text-center py-4 md:py-0">
                                        <a
                                            className="font-semibold text-[#333333] text-base	hover:text-[#FF6C20]"
                                            href="#"
                                        >
                                            About
                                        </a>
                                    </li>
                                    <li className="md:ml-14 text-center py-4 md:py-0">
                                        <a
                                            className="font-semibold text-[#333333] text-base	hover:text-[#FF6C20]"
                                            href="#"
                                        >
                                            Tech Stack
                                        </a>
                                    </li>
                                    <li className="md:ml-14 text-center py-4 md:py-0">
                                        <Link href="/portofolio">
                                            <a
                                                className="font-semibold text-[#333333] text-base	hover:text-[#FF6C20]"
                                            >
                                                Portofolio
                                        </a>
                                        </Link>

                                    </li>
                                    <li className="md:ml-14 text-center py-4 md:py-0">
                                        <a
                                            className="font-semibold text-white text-base rounded-md p-5 bg-[#FF6C20] py-3 hover:text-[#FF6C20] hover:bg-white border-2 border-solid border-[#FF6C20]"
                                            href="#"
                                        >
                                            Lets Talk
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header;
