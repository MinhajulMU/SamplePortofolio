import React from 'react'
import Image from 'next/image'

function About() {
    return (
        <div>
            <section className="w-full min-h-[500px] bg-[url('/assets/images/Vector.svg')] bg-top bg-no-repeat bg-cover mt-5 py-16 pt-32" >
                <div className="container mx-auto">
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2">
                            <div className="w-full text-center">
                                <Image src="/assets/images/about.png" width={450} height={528}></Image>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 mt-10">
                            <div className="w-11/12 md:w-9/12	mx-auto ">
                                <h1 className="font-montserrat font-bold text-xl md:text-[32px] text-[#333333] border-b-8 border-solid border-[#FF6C20] w-fit pb-3">About</h1>
                                <p className="text-lg md:text-[24px] mt-5 text-[#555555]">Minhaj is a Passionate web developer who have strong passion in business and technology. I really like to build and develop business with technology. Most of the projects I build are using Laravel and Javascript.</p>
                                <p className="text-lg md:text-[24px] mt-5 text-[#555555]">
                                    Born in Rembang, Central Java. Minhaj has basic in computer science. he also often participates in some IT competitions and community activities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
