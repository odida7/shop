import React from 'react'
import { UserButton } from '@clerk/nextjs';

export default function Navbar() {
  return (
    <div className='flex flex-row items-center justify-between px-8 py-3 bg-blue-500 text-white text-lg'>
        Home
      <UserButton />
    </div>
  )
}
