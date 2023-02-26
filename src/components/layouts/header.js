import { IoLogoFacebook, IoLogoGithub, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter,} from "react-icons/io5"
import { MdMail } from "react-icons/md"
import ResumeIcon from "@/assets/icons/resume-icon"
import Image from "next/image"
import { SOCIAL_LINKS } from "@/content/constants"
import { AiFillInstagram } from "react-icons/ai"

export default function Header(){
    return (
        <div className=" h-[60px] text-center fixed z-20  top-0 left-0 right-20 lg:right-0">
            <div className="flex justify-start lg:justify-center items-center h-full lg:mx-auto" name="social-media">
                <ul className="flex justify-start lg:justify-center items-center h-full gap-3 text-2xl px-4 text-accent-500 bg-secondary-500 bg-opacity-50 rounded-br-lg lg:rounded-b-xl">
                    <li className="text-accent-500 hover:text-accent-400">
                        <a href={SOCIAL_LINKS.facebook.link }>
                            <IoLogoFacebook className="text-2xl lg:text-3xl" />
                        </a>
                    </li>
                    <li className="text-accent-500 hover:text-accent-400">
                        <a href={SOCIAL_LINKS.github.link }>
                            <IoLogoGithub  className="text-2xl lg:text-3xl"/>
                        </a>
                    </li>
                    <li className="text-accent-500 hover:text-accent-400">
                        <a href={SOCIAL_LINKS.linkedin.link }>
                            <IoLogoLinkedin  className="text-2xl lg:text-3xl" />
                        </a>
                    </li>
                    <li className="text-accent-500 hover:text-accent-400">
                        <a href={SOCIAL_LINKS.twitter.link }>
                            <IoLogoTwitter className="text-3xl lg:text-4xl"/>
                        </a>
                    </li>
                    <li className="text-accent-500 hover:text-accent-400">
                        <a href={SOCIAL_LINKS.instagram.link }>
                            <AiFillInstagram className="text-3xl lg:text-4xl"/>
                        </a>
                    </li>
                    <li className="text-accent-500 hover:text-accent-400">
                        <ResumeIcon className="w-7 lg:w-8 text-accent-500 hover:text-accent-400" color={"#FF5722"}/>
                    </li>
                </ul>
            </div>
        </div>
    )
}