import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './Navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Xiomara Garcia',
  description: 'Desarrolladora Full Stack con una sólida base en React, React Native, JavaScript, Node.js, MongoDB y Firebase. Me apasiona crear aplicaciones web y móviles funcionales y bien diseñadas. Explora mis proyectos y conoce más sobre mi enfoque en el desarrollo de soluciones tecnológicas.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
