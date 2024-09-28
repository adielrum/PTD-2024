"use client"

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Button } from './ui/button'

const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Assigments",
    path: "/assigments"
  },
  {
    name: "Handbook",
    path: "/handbook"
  },
  {
    name: "Announcement",
    path: "/announcement",
  }
]

const Navbar = () => {
  const pathname = usePathname()

  return (
    <header className='w-full'>
      
      {/* Desktop Nav */}
      <nav className='w-full mx-auto max-w-7xl overflow-x-hidden p-4 flex items-center justify-between'>
        <Link href="/">  
          <h1 className='font-black text-3xl text-orange-gradient text-shadow-orange'>PTD KSEP</h1>
        </Link>

        <Button variant={"outline"}>

        </Button>
      </nav>

      {/* Mobile Nav */}
    </header>
  )
}

export default Navbar