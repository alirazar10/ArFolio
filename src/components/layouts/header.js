import { IoLogoFacebook, IoLogoGithub, IoLogoLinkedin,} from "react-icons/io5"
import { MdMail } from "react-icons/md"
import ResumeIcon from "@/assets/icons/resume-icon"
import Image from "next/image"

export default function Header(){
    return (
        <div className=" h-[60px] text-center fixed z-20  top-0 left-0 right-20 lg:right-0">
            <div className="flex justify-start lg:justify-center items-center h-full lg:mx-auto" name="social-media">
                <ul className="flex justify-start lg:justify-center items-center gap-3 text-2xl px-4 text-accent-500">
                    <li className="text-accent-500 hover:text-accent-400">
                        <IoLogoFacebook className="text-2xl lg:text-3xl" />
                    </li>
                    <li className="text-accent-500 hover:text-accent-400">
                        <IoLogoGithub  className="text-2xl lg:text-3xl"/>
                    </li>
                    <li className="text-accent-500 hover:text-accent-400"><IoLogoLinkedin  className="text-2xl lg:text-3xl" /></li>
                    <li className="text-accent-500 hover:text-accent-400"><MdMail  className="text-3xl lg:text-4xl"/></li>
                    <li className="text-accent-500 hover:text-accent-400">
                        <ResumeIcon className="w-7 lg:w-8 text-accent-500 hover:text-accent-400" color={"#FF5722"}/>
                    </li>
                </ul>
            </div>
        </div>
    )
}