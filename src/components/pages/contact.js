import ResumeIcon from "@/assets/icons/resume-icon";
import { SOCIAL_LINKS } from "@/content/constants";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoFacebook, IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";

export default function Contact () {
    return (
        <div className="min-h-screen flex flex-col justify-center max-w-3xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="pr-4 ">
                    <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-primary-50 py-2">Let&lsquo;s connect</h2>
                    <p className="text-primary-100 text-justify text-sm lg:text-base leading-6">
                        We&lsquo;re just a conversation away over a cup of coffee - my treat! Whether you have a proposal, a question, or just want to chat, feel free to drop me a line below or email me directly.  
                    </p>
                </div>
                <div>
                    <form action="">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                            <div className="">
                                <label htmlFor="first-name" className="block text-sm font-medium text-primary-50">
                                    First name
                                </label>
                                <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="mt-1.5 p-2 block w-full rounded-md h-12 border-secondary-300 shadow-sm focus:border-primary-400 focus:ring-accent-500 sm:text-sm"
                                />
                                </div>
                                <div className="">
                                <label htmlFor="first-name" className="block text-sm font-medium text-primary-50">
                                    email
                                </label>
                                <input
                                    type="email"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    placeholder="you@example.com"
                                    className="mt-1.5 p-2 block w-full rounded-md h-12 border-secondary-300 shadow-sm focus:border-primary-400 focus:ring-accent-500 sm:text-sm"
                                />
                            </div>
                            <div className="lg:col-span-2">
                                <label htmlFor="about" className="block text-sm font-medium text-primary-50">
                                    Message
                                </label>
                                <div className="mt-1.5">
                                    <textarea
                                        id="about"
                                        name="about"
                                        rows={4}
                                        className="mt-1 p-2 block w-full rounded-md border-secondary-300 shadow-sm focus:border-primary-400 focus:ring-accent-500 sm:text-sm"
                                        placeholder=""
                                        defaultValue={''}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 flex justify-end">
                        <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-accent-500 py-2 px-4 text-sm font-medium text-primary-50 shadow-sm hover:bg-accent-700 focus:outline-none focus:ring-1 focus:ring-accent-500 focus:ring-offset-1"
                        >
                            Send
                        </button>

                        </div>
                    </form>
                </div>
            </div>
            <div className="mt-10">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-primary-50 py-2">Let&lsquo;s stay connected</h3>
                <div>
                    <ul className="flex items-center gap-3 text-2xl text-primary-100">
                        <li className="text-primary-100 hover:text-accent-400">
                            <a href={SOCIAL_LINKS.facebook.link }>
                                <IoLogoFacebook className="text-2xl lg:text-3xl" />
                            </a>
                        </li>
                        <li className="text-primary-100 hover:text-accent-400">
                            <a href={SOCIAL_LINKS.github.link }>
                                <IoLogoGithub  className="text-2xl lg:text-3xl"/>
                            </a>
                        </li>
                        <li className="text-primary-100 hover:text-accent-400">
                            <a href={SOCIAL_LINKS.linkedin.link }>
                                <IoLogoLinkedin  className="text-2xl lg:text-3xl" />
                            </a>
                        </li>
                        <li className="text-primary-100 hover:text-accent-400">
                            <a href={SOCIAL_LINKS.twitter.link }>
                                <IoLogoTwitter className="text-3xl lg:text-4xl"/>
                            </a>
                        </li>
                        <li className="text-primary-100 hover:text-accent-400">
                            <a href={SOCIAL_LINKS.instagram.link }>
                                <AiFillInstagram className="text-3xl lg:text-4xl"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}