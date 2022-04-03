import React from 'react'

function Contact() {
    return (
        <div>
            <section className="w-full min-h-[500px]">
                <div className="container mx-auto">
                    <div className="w-full bg-[#eeeeee] mt-20 rounded p-10">
                        <div className="flex flex-wrap">
                            <div className="w-full md:w-1/2 p-5">
                                <h1 className="font-montserrat font-bold text-xl md:text-[32px] text-[#333333] border-b-8 border-solid border-[#FF6C20] w-fit pb-3">Contact</h1>
                                <p className="text-lg md:text-[20px] mt-5 text-[#999999] mb-5">Lets talk with me for more information</p>
                                <div className="flex flex-col mt-5">
                                    <div className="flex flex-wrap">
                                        <div className="mr-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <span className="font-bold">Mail</span><br></br>
                                            <span className="font-bold">minhajulmubarok@gmail.com</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap mt-10">
                                        <div className="mr-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <span className="font-bold">Whatsapp</span><br></br>
                                            <span className="font-bold">+6285726772962</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap mt-10">
                                        <div className="mr-4">

                                            <svg className="instagram-logo" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 551.034 551.034" style={{ enableBackground: 'new 0 0 551.034 551.034' }} xmlSpace="preserve">
                                                <path className="logo" id="XMLID_17_" d="M386.878,0H164.156C73.64,0,0,73.64,0,164.156v222.722 c0,90.516,73.64,164.156,164.156,164.156h222.722c90.516,0,164.156-73.64,164.156-164.156V164.156 C551.033,73.64,477.393,0,386.878,0z M495.6,386.878c0,60.045-48.677,108.722-108.722,108.722H164.156 c-60.045,0-108.722-48.677-108.722-108.722V164.156c0-60.046,48.677-108.722,108.722-108.722h222.722 c60.045,0,108.722,48.676,108.722,108.722L495.6,386.878L495.6,386.878z" />
                                                <path id="XMLID_81_" fill="#555" d="M275.517,133C196.933,133,133,196.933,133,275.516 s63.933,142.517,142.517,142.517S418.034,354.1,418.034,275.516S354.101,133,275.517,133z M275.517,362.6 c-48.095,0-87.083-38.988-87.083-87.083s38.989-87.083,87.083-87.083c48.095,0,87.083,38.988,87.083,87.083 C362.6,323.611,323.611,362.6,275.517,362.6z" />
                                                <circle id="XMLID_83_" fill="#555" cx="418.306" cy="134.072" r="34.149" />
                                            </svg>
                                        </div>
                                        <div>
                                            <span className="font-bold">Instagram</span><br></br>
                                            <span className="font-bold">@mnhjmbrk</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 p-5">
                                <div className="w-full md:border-l border-solid border-gray-300 h-full md:pl-20">
                                    <div className="flex flex-wrap">
                                        <div className="w-full md:w-1/2">
                                            <span className="font-bold">Name</span><br></br>
                                            <input type="text" className="p-2 mt-4 w-full bg-[#eeeeee] border border-solid border-[#999999] rounded-md" ></input>
                                        </div>
                                        <div className="w-full md:w-1/2 md:pl-5 mt-5 md:mt-0">
                                            <span className="font-bold">Email</span><br></br>
                                            <input type="text" className="p-2 mt-4 w-full bg-[#eeeeee] border border-solid border-[#999999] rounded-md" ></input>
                                        </div>
                                    </div>
                                    <div className='flex'>
                                        <div className="w-full mt-5">
                                            <span className="font-bold">Subject</span><br></br>
                                            <input type="text" className="p-2 mt-4 w-full bg-[#eeeeee] border border-solid border-[#999999] rounded-md" ></input>
                                        </div>
                                    </div>
                                    <div className='flex'>
                                        <div className="w-full mt-5">
                                            <span className="font-bold">Message</span><br></br>
                                            <textarea className="p-2 mt-4 w-full bg-[#eeeeee] border border-solid border-[#999999] rounded-md" rows='5'></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
