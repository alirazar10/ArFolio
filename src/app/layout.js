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
      <head>
<script
  dangerouslySetInnerHTML={{
    __html: `
        <!-- Hotjar Tracking Code for https://iamali.vercel.app/ -->
        <script>
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:3384548,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        </script>
    `,
  }}
/>

      <Head />
      </head>
      
      <body className={`${montserrat.className} bg-primary-500 min-h-screen m-0 p-0`}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
