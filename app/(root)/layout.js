import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import '../globals.css'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'shop',
  description: 'shopping app',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
       <body className={inter.className}>

        <div className='flex flex-col'>
          <Navbar/>

         <div className='flex flex-row'>
          <Sidebar/>

          {children}
         </div> 

        </div>
       
       </body>
      </html>
    </ClerkProvider>
    
  )
}
