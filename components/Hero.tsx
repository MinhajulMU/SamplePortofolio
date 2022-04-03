import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Hero() {
    return (
        <div>
            <section className="w-full min-h-[700px] bg-white mt-[100px]">
                <div className="container mx-auto">
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2">
                            <div>
                                <h1 className="font-montserrat font-extrabold text-4xl	md:text-6xl align-middle	text-[#333333] md:mt-[200px] ml-[80px]">Hi!<br></br> I'm Minhaj</h1>
                                <h2 className="ml-[80px] font-montserrat font-semibold text-2xl md:text-4xl	text-[#FF6C20] mt-4 mb-10">Passionate Web Developer</h2>
                                <a href="#" className="ml-[80px] font-montserrat bg-[#2A9DF0] text-white p-4 px-8 rounded-md font-[20px] hover:text-[#2A9DF0] hover:bg-white border-2 border-solid border-[#2A9DF0]	">
                                    Find Out More
                                </a>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="w-full text-center">
                                <Image src="/assets/images/banner.png" className="mx-auto" alt="Banner" width={492} height={540} ></Image>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero;
