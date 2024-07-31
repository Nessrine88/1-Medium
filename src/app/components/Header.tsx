import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='flex  max-w-7xl mx-auto justify-between p-5'>
        <div className="flex items-center space-x-5">
            <div className='flex items-center'>
            <Link href="/">
             <img 
             src="https://th.bing.com/th/id/OIP.NQeR75b1kMHAvTliS50wsQHaB1?rs=1&pid=ImgDetMain" 
             alt="medium logo" 
             className='w-44 object-fit pointer-cursor'
             />
            </Link>
            </div>
            <div className='md:flex  space-x-5 hidden items-center'>
                <h3>About</h3>
                <h3>Contact</h3>
                <h3 className='bg-green-600 px-4 py-1 rounded-full text-white'>Follow</h3>
            </div>
        </div>
        <div className='flex items-center space-x-5 text-green-600'>
            <h3>sign in</h3>
            <h3 className='border-green-600  py-1 px-4 rounded-full border'>Get started</h3>
        </div>
    </div>
  )
}

export default Header