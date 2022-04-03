import React from 'react'
import { FiInstagram} from "react-icons/fi";
import { FaFacebook,FaLinkedin} from "react-icons/fa";

function Footer() {
    return (
        <div>
            <footer className="w-full min-h-[50px] mt-20 ">
                <div className="container border-t border-solid border-[#dddddd] mx-auto py-5">
                    <div className="flex flex-wrap justify-between">
                        <div>
                            Copyright &copy; 2022 minhajcode
                            
                        </div>
                        <div className="flex flex-wrap gap-2">
                             <a href="#">
                            <FaFacebook  className="text-[#999999]"></FaFacebook>
                            </a>
                            <a href="#">
                            <FiInstagram  className="text-[#999999]"></FiInstagram>
                            </a>
                            <a href="#">
                            <FaLinkedin className="text-[#999999]"></FaLinkedin>
                            </a>

                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
