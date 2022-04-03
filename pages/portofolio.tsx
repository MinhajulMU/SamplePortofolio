import type { NextPage } from 'next'
import Layout from '../components/Layout';
import Hero from "../components/Hero"
import About from "../components/About"
import TechStack from "../components/TechStack"
import Contact from "../components/Contact"
const Portofolio: NextPage = () => {
  return (
    <div>
      <Layout title="Portofolio">
        <section className="w-full min-h-screen mt-[100px] pt-20">
          <div className="container mx-auto">
            <div>
              <h1 className="text-center font-bold text-[32px] text-[#333333]">
                Portofolio
              </h1>
              <p className="text-center text-[15px] text-[#AEB2D5]">Some projects that i build</p>
              <div className="flex flex-wrap justify-center mt-14 md:w-10/12 mx-auto">
                <div className="w-[300px] mx-2 mb-10">
                  <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                    <div className="flex-shrink-0 p-4">
                      <a href="https://ummacademy.com">
                        <img src="/assets/images/portofolio/umma.png" alt="" className="object-cover w-full h-[137px] rounded" />
                      </a>
                    </div>
                    <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                      <div className="flex-1">
                        <a className="block mt-2" href="https://ummacademy.com">
                          <p className="text-[14px] font-bold text-[#333333] hover:text-orange-500">Ummacademy Platform</p>
                        </a>
                        <div>
                        </div><p className="mt-3 text-[12px] text-[#999999]">build an education platform from zero which includes course management,
                        classes, teachers, teaching and learning process, registration, payment.</p>
                        <div className="mt-4">
                          <span className="inline-block rounded-xl text-white bg-orange-500 px-2 py-1 text-xs font-bold mr-2 mb-1">PHP</span>
                          <span className="inline-block rounded-xl text-white bg-orange-500 px-2 py-1 text-xs font-bold mr-2 mb-1">Laravel</span>
                          <span className="inline-block rounded-xl text-white bg-orange-500 px-2 py-1 text-xs font-bold mr-2 mb-1">React Js</span>
                          <span className="inline-block rounded-xl text-white bg-orange-500 px-2 py-1 text-xs font-bold mr-2 mb-1">Tailwind</span>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[300px] mx-2 mb-10">
                  <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                    <div className="flex-shrink-0 p-4">
                      <a href="https://ejabfung.ristekbrin.go.id">
                        <img src="/assets/images/portofolio/ejabfung.png" alt="" className="object-cover w-full h-[137px] rounded" />
                      </a>
                    </div>
                    <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                      <div className="flex-1">
                        <a className="block mt-2" href="https://ejabfung.ristekbrin.go.id">
                          <p className="text-[14px] font-bold text-[#333333] hover:text-orange-500">E-Jabfung</p>
                        </a>
                        <div>
                        </div><p className="mt-3 text-[12px] text-[#999999]">Build Apps to serve for functional positions applications in the Ristekbrin Staff Environment</p>
                        <div className="mt-4">
                          <span className="inline-block rounded-xl text-white bg-orange-500 px-2 py-1 text-xs font-bold mr-2 mb-1">PHP</span>
                          <span className="inline-block rounded-xl text-white bg-orange-500 px-2 py-1 text-xs font-bold mr-2 mb-1">Laravel</span>
                          <span className="inline-block rounded-xl text-white bg-orange-500 px-2 py-1 text-xs font-bold mr-2 mb-1">Bootstrap</span>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[300px] mx-2 mb-10">
                  <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                    <div className="flex-shrink-0 p-4">
                      <a href="http://bima.upnyk.ac.id/login">
                        <img src="/assets/images/portofolio/bima.png" alt="" className="object-cover w-full h-[137px] rounded" />
                      </a>
                    </div>
                    <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                      <div className="flex-1">
                        <a className="block mt-2" href="http://bima.upnyk.ac.id/login">
                          <p className="text-[14px] font-bold text-[#333333] hover:text-orange-500">Bima UPN V Yogyakarta</p>
                        </a>
                        <div>
                        </div><p className="mt-3 text-[12px] text-[#999999]">Develop applications to serve the academic process of UPN Veteran
                        Yogyakarta students, including curriculum systems, scheduling, lectures, to
produce transcripts of grades for students.</p>
                        <div className="mt-4">
                          <span className="inline-block rounded-xl text-white bg-orange-500 px-2 py-1 text-xs font-bold mr-2 mb-1">PHP</span>
                          <span className="inline-block rounded-xl text-white bg-orange-500 px-2 py-1 text-xs font-bold mr-2 mb-1">Laravel</span>
                          <span className="inline-block rounded-xl text-white bg-orange-500 px-2 py-1 text-xs font-bold mr-2 mb-1">Bootstrap</span>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-[300px] mx-2 mb-10">
                  <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                    <div className="flex-shrink-0 p-4">
                      <a href="http://spp.tugutech.net/">
                        <img src="/assets/images/portofolio/spp.png" alt="" className="object-cover w-full h-[137px] rounded" />
                      </a>
                    </div>
                    <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                      <div className="flex-1">
                        <a className="block mt-2" href="http://spp.tugutech.net/">
                          <p className="text-[14px] font-bold text-[#333333] hover:text-orange-500">School Tuition Payment Application</p>
                        </a>
                        <div>
                        </div><p className="mt-3 text-[12px] text-[#999999]">Build an application for school tuition payments system, currently there are 2 schools subscribed and pay for this apps.</p>
                        <div className="mt-4">
                          <span className="inline-block rounded-xl text-white bg-orange-500 px-2 py-1 text-xs font-bold mr-2 mb-1">PHP</span>
                          <span className="inline-block rounded-xl text-white bg-orange-500 px-2 py-1 text-xs font-bold mr-2 mb-1">Laravel</span>
                          <span className="inline-block rounded-xl text-white bg-orange-500 px-2 py-1 text-xs font-bold mr-2 mb-1">Bootstrap</span>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="w-full mt-10 text-center">
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                  {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
                  <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium mx-4"> 1 </a>
                  <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  )
}

export default Portofolio
