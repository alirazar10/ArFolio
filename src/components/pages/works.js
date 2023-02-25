import { IoLogoGithub } from "react-icons/io5";
import { MdOutlineOpenInNew } from "react-icons/md";

export default function Works(){
    return (
        <div className="min-h-screen px-5 lg:px-6 flex justify-center items-center w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {
                    [1,2,3,4].map(item=>(
                        <div key={item} className="bg-secondary-500 p-4 pt-6 shadow-primary hover:primary-lg ease-in-out border border-primary-700 rounded-xl translate-y-0 hover:-translate-y-2.5 duration-500">
                            <h2 className="text-accent-500 font-bold py-2">Hesab Ketab</h2>
                            <div className="divide-y divide-secondary-400">
                            <p className="text-primary-100 text-sm leading-6 lg:text-base  py-2 text-justify">&#34;Hesab Ketab&#34; app simplifies monthly electricity and water bill calculation between neighbors and helps keep track of bills in Afghanistan. Utilized Google Flutter Framework as the mobile technology, PHP Laravel as the backend, RestAPI as the medium between client and server, and MySQL for data storage.</p>
                            
                            <p className="text-[#8892B0] text-xs lg:text-sm pt-4 text-justify"><span>PHP · Git · Bootstrap · CSS · AJAX · JSON · GitHub · VS Code · Laravel · HTML · php · JavaScript · MySQL · SQL · jQuery</span></p>
                            </div>
                            <div className="flex justify-start items-center mt-3 gap-2">
                                <IoLogoGithub className="text-2xl lg:text-3xl text-primary-50 hover:text-accent-400 cursor-pointer"/>
                                <MdOutlineOpenInNew className="text-2xl lg:text-3xl text-primary-50 hover:text-accent-400 cursor-pointer"/>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}