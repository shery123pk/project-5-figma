import React from 'react'
import { CircleUserRound, Search, ShoppingCart, X } from 'lucide-react'
import Link from 'next/link'
import { Input } from './ui/input'
import { Button } from './ui/button'

function Header() {
  return (
    <>
    {/* top-header */}
        <div className='  w-full h-12 bg-black text-white flex items-center justify-between px-[100px]'>

            <div className='text-center flex items-center justify-center gap-2 '>
                <span>Sign up and get 20% off to your first order. <Link href={"#!"} className='underline'>Sign Up Now</Link></span> </div>
                <X />
        </div>


    {/* bottom-header */}
    <div className='  w-full  px-[100px] pt-[62px] pb-[16px]'>

          <div className='container h-[38px] mx-auto px-4 py-6'>
            <div className='flex items-center justify-between gap-8'>
                {/* logo */}
                <Link href="/" className='text-xl font-bold'>SHOP.CO</Link>

                {/* navigation */}
                <nav className='md:flex items-center gap-[32px]'>
                    <Link href={"#!"} className='text-[16px] leading-[24px] relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full'>On Sale</Link>
                    <Link href={"#!"} className='text-[16px] leading-[24px] relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full'>New arrivals</Link>
                    <Link href={"#!"} className='text-[16px] leading-[24px] relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full'>Brands</Link>

                </nav>

                {/* serch & icons */}
                <div className='flex items-center  gap-4'>
                    <div className=' relative hidden md:block'>
                        <Input className='w-[577px] pl-10 bg-gray-50 ' placeholder='Search for products' type='search'/>
                        <Search className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4  bg-gray-50'/>
                       <div > 
                        <ShoppingCart/>
                        </div>
                       <CircleUserRound />
                        
                    </div>

                </div>

          </div>
        </div>
        </div>
    </>
  )
}

export default Header