import './globals.css'
import { Inter } from 'next/font/google'
import Footer from './component/Footer'
import Navbar from './component/Navbar'

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Kelubia Dental Care',
  description: 'Unique oral health needs.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
      <main>
        {children}

      </main>


      <Footer />
      </body>
    </html>
  )
}
