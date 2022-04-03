import React from 'react'
import Image from 'next/image'
function TechStack() {
    return (
        <div>
            <section className="w-full min-h-[200px] md:min-h-[450px] mt-10">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 pt-5">
                        <div className="w-full min-h-[300px] md:min-h-[550px] bg-[#EEEEEE] py-16">
                            <div className="w-9/12 h-10 mx-auto ">
                                <div className="grid gap-4 grid-cols-4">
                                    <div className="text-center mb-5">
                                        <Image src="/assets/images/stack/PHP-logo.svg" width={89} height={68}></Image>
                                    </div>
                                    <div className='text-center  mb-5'>
                                        <Image src="/assets/images/stack/800px-Laravel.svg.png" width={58} height={60}></Image>
                                    </div>
                                    <div className='text-center  mb-5'>
                                        <Image src="/assets/images/stack/Unofficial_JavaScript_logo_2.svg.png" width={60} height={60}></Image>
                                    </div>
                                    <div className='text-center  mb-5'>
                                        <Image src="/assets/images/stack/Tailwind_CSS_Logo.svg.png" width={60} height={60}></Image>
                                    </div>
                                    <div className='text-center mb-5'>
                                        <Image src="/assets/images/stack/React_logo_wordmark.png" width={93} height={31}></Image>
                                    </div>
                                    <div className='text-center  mb-5'>
                                        <Image src="/assets/images/stack/640px-Python-logo-notext.svg.png" width={48} height={48}></Image>
                                    </div>
                                    <div className='text-center  mb-5'>
                                        <Image src="/assets/images/stack/800px-Amazon_Web_Services_Logo.svg.png" width={72} height={43}></Image>
                                    </div>
                                    <div className='text-center  mb-5'>
                                        <Image src="/assets/images/stack/1280px-Git-logo.svg.png" width={76} height={32}></Image>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 mt-10">
                        <div className="w-11/12 md:w-9/12	mx-auto">
                            <h1 className="font-montserrat font-bold text-xl md:text-[32px] text-[#333333] border-b-8 border-solid border-[#FF6C20] w-fit pb-3">Tech Stack</h1>
                            <p className="text-lg md:text-[20px] mt-5 text-[#555555] mb-5">Some Technologies that i often use</p>
                            <Image src="/assets/images/techstack.png" width={533} height={369} className="mt-5"></Image>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TechStack
