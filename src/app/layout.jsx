import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
    
            <Navbar />
            <div className='relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden'>
            <main>
              <div>
                {children}
              </div>
            </main>
          </div>
        </body>
    </html>
  )
}
