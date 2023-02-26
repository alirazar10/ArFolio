import MyImage from "@/assets/images/main-image.jpg"
import Image from "next/image"
export default function HomePage(){
    return(
        <div className="flex justify-center items-center w-full h-screen">
            <div className="relative overflow-hidden rounded-xl p-5 lg:p-0 w-full">
                <div className="h-[160px] w-[150px] mx-auto lg:mx-0 lg:h-[320px] lg:w-[290px] rounded-xl border border-accent-700 overflow-hidden z-10 relative">
                    <Image src={MyImage} height={"100%"} width={"100%"} alt="My image" />
                </div>
                <div className="h-[280px] lg:h-[230px] bg-secondary-500 relative -mt-20 lg:mt-0 border border-primary-700 lg:absolute lg:top-[50%]  lg:-translate-y-2/4 lg:left-48 lg:tr flex flex-col justify-center items-stretch rounded-xl shadow-primary">
                    <div className="mx-2 p-2 pt-24 lg:p-0 space-y-2 lg:pl-[8rem] relative">
                        <h4 className=" text-primary-50 text-base md:text-xl lg:text-2xl font-bold inline lg:block pr-2" >Hi, I am</h4>
                        <h2 className="text-accent-500 text-xl md:text-2xl lg:text-4xl font-bold inline lg:block">Ali Reza </h2>
                        <h3 className="text-primary-100 text-base md:text-2xl lg:text-3xl font-bold">A Full Stack Developer!</h3>
                        <p className="text-primary-100 text-sm lg:text-base italic py-2">&ldquo;Transforming ideas into innovative full-stack web solutions, one pixel at a time.&ldquo;</p>
                    </div>
                </div>
            </div>
        </div>
    )
}