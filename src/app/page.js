
import HomePage from '@/components/pages/home-page'
import Works from '@/components/pages/works'
import { Montserrat } from '@next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
      <div className='xl:max-w-[992px] mx-auto'>
        <div name='home' >
        <HomePage/>

        </div>
        <div name="work">
          <Works/>
        </div>
        <div name="about">
          <HomePage/>
        </div>
        <div name="experience">
          <HomePage/>
        </div>
        <div name="contact">
          <HomePage/>
        </div>
      </div>
  )
}
