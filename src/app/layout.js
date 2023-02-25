import './globals.css'
import { Montserrat } from '@next/font/google'
import Layout from '@/components/layouts/layout'
import Head from './head'

const montserrat = Montserrat({
  weight: ['100','200','300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='min-h-screen m-0 p-0'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <Head />
      <body className={`${montserrat.className} bg-primary-500 min-h-screen m-0 p-0`}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
