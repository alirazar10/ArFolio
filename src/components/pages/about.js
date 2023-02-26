import { skills } from "@/content/constants";
import Skills from "../libs/skills";

export default function About(){
    return (
        <div className="flex justify-center items-center w-full h-full">
            <div className="relative ">
                <div className="py-8 p-4 pt-6 lg:px-10 space-y-2 lg:space-y-3 lg:w-[75%] lg:pr-[30%] bg-secondary-500 border border-primary-700 rounded-xl shadow-primary" name="about-content">
                    <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-primary-50 py-2">The Story Behind the Pixel</h2>
                    <p className="text-primary-100 text-justify text-sm lg:text-base leading-6">
                        Hello, I&lsquo;m Ali Reza - a full stack developer with a passion for building pixel-perfect websites and web applications. My journey into the world of technology began when I was a school student, working as a technician for a small ISP company. From there, my interest in computer science grew, and I knew that I had found my calling.
                    </p>
                    <p className="text-primary-100 text-justify text-sm lg:text-base leading-6 ">
                        I believe that technology is a powerful tool that has the ability to bring people together and make their lives easier, especially in a world that is rapidly changing and presenting new challenges. That&lsquo;s why I&lsquo;m dedicated to creating intuitive, user-friendly digital experiences that help businesses and individuals achieve their goals.
                    </p>
                    <p className="text-primary-100 text-justify text-sm lg:text-base leading-6">
                        When I&lsquo;m not busy coding, you can find me exploring the great outdoors or enjoying a hot cup of coffee. Thanks for taking the time to get to know me a little better - I can&lsquo;t wait to work together and bring your ideas to life!
                    </p>
                </div>
                <div className="lg:bg-primary-400 px-8 py-10 group rounded-lg lg:shadow-primary lg:border lg:border-primary-700 lg:absolute lg:top-2/4 lg:-translate-y-2/4 lg:left-[50%] ">
                    <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-primary-50 py-5 transition-all duration-300 group-hover:text-accent-500">Skills and Expertise</h1>
                    <Skills skills={skills}/>
                </div>
            </div>
        </div>
    )
}