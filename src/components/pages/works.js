import { projects } from "@/content/constants";
import { IoLogoGithub, IoLogoGooglePlaystore } from "react-icons/io5";
import { MdOutlineOpenInNew } from "react-icons/md";

export default function Works(){
    return (
        <div className="h-full flex flex-col justify-start items-start w-full">
            <h1 className="text-3xl font-bold text-primary-50 py-5 lg:py-10 text-left">Work Showcase</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {
                    projects.map(item=>(
                        <div key={item} className="flex flex-col bg-secondary-500 p-4 group pt-6 shadow-primary hover:primary-lg border border-primary-700 hover:border-primary-400 rounded-xl ease-in-out  translate-y-0 hover:-translate-y-1.5 duration-300">
                            <h2 className="text-primary-100 transition-all duration-300 group-hover:text-accent-500 font-bold py-3 text-2xl">{item.title}</h2>
                            <div className="h-full flex flex-col justify-between">
                            <p className="text-primary-100 text-sm lg:text-base  py-2 text-justify">{item.description}</p>
                            
                            <p className="text-[#8892B0] text-xs lg:text-sm pt-4 text-justify"><span>PHP · Git · Bootstrap · CSS · AJAX · JSON · GitHub · VS Code · Laravel · HTML · php · JavaScript · MySQL · SQL · jQuery</span></p>
                            </div>
                            <div className="flex justify-end items-center mt-4 gap-2">
                                {
                                    item.website_link && <a href={item.website_link}><MdOutlineOpenInNew className="text-xl lg:text-2xl text-primary-50 hover:text-accent-400 cursor-pointer"/></a>
                                }
                                {
                                    item.github_link && <a href={item.github_link}><IoLogoGithub className="text-xl lg:text-2xl text-primary-50 hover:text-accent-400 cursor-pointer"/></a> 
                                }
                                {
                                    item.playstore_link && <a href={item.playstore_link}><IoLogoGooglePlaystore className="text-xl lg:text-2xl text-primary-50 hover:text-accent-400 cursor-pointer"/></a> 
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}