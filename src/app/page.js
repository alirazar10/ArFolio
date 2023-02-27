
import About from '@/components/pages/about'
import Contact from '@/components/pages/contact'
import Experience from '@/components/pages/experience'
import HomePage from '@/components/pages/homePage'
import Works from '@/components/pages/works'
import { Montserrat } from '@next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
      <div className='xl:max-w-[1024px] mx-auto'>
        <div name='home' className='min-h-screen xl:max-w-[992px] mx-auto' >
        <HomePage/>
        </div>
        <div name="about" className='min-h-screen py-20'>
          <About/>
        </div>
        <div name="experience" className='min-h-screen py-20'>
          <Experience/>
        </div>
        <div name="work" className='min-h-screen py-20'>
          <Works/>
        </div>
        <div name="contact" className='min-h-screen py-20'>
          <Contact/>
        </div>
      </div>
  )
}
