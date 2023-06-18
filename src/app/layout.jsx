import './globals.css'
import { Inter } from 'next/font/google'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import { Montserrat } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const mont = Montserrat({ subsets:['latin'], 
weight:['100', '200', '300', '400', '500', '600', '700', '800', '900']})


export const metadata = {
  title: 'Kelubia Dental Care',
  description: 'Unique oral health needs.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mont.className}>
        <Navbar />
      <main>
        {children}

      </main>


      <Footer />
      </body>
    </html>
  )
}
