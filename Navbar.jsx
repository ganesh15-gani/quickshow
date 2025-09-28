import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { MenuIcon, SearchIcon, TicketPlus, XIcon } from 'lucide-react'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user } = useUser()
  const { openSignIn } = useClerk()
  const navigate = useNavigate()

  return (
    <div className='fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-5'>
      <Link to='/' className='max-md:flex-1'>
        <img src={assets.logo} alt="Logo" className='w-36 h-auto' />
      </Link>

      {/* Mobile Menu */}
      <div className={`
        md:hidden fixed top-0 left-0 h-screen w-3/4 bg-black/80 backdrop-blur flex flex-col items-center justify-center gap-8 transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <XIcon 
          className='absolute top-6 right-6 w-6 h-6 cursor-pointer text-white' 
          onClick={() => setIsOpen(false)} 
        />
        <Link onClick={() => { scrollTo(0,0); setIsOpen(false) }} to='/'>Home</Link>
        <Link onClick={() => { scrollTo(0,0); setIsOpen(false) }} to='/movies'>Movies</Link>
        <Link onClick={() => { scrollTo(0,0); setIsOpen(false) }} to='/'>Theatres</Link>
        <Link onClick={() => { scrollTo(0,0); setIsOpen(false) }} to='/'>Releases</Link>
        <Link onClick={() => { scrollTo(0,0); setIsOpen(false) }} to='/favorite'>Favorites</Link>
      </div>

      {/* Desktop Menu */}
      <div className='hidden md:flex items-center gap-8'>
        <Link to='/'>Home</Link>
        <Link to='/movies'>Movies</Link>
        <Link to='/'>Theatres</Link>
        <Link to='/'>Releases</Link>
        <Link to='/favorite'>Favorites</Link>
      </div>

      {/* Right Side */}
      <div className='flex items-center gap-4 md:gap-8'>
        <SearchIcon className='hidden md:block w-6 h-6 cursor-pointer' />

        {!user ? (
          <button 
            onClick={() => openSignIn()}  
            className='px-4 py-1 sm:px-7 sm:py-2 bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer'>
            Login
          </button>
        ) : (
          <UserButton>
            <UserButton.Menu>
              <UserButton.Action 
                label="My Bookings" 
                onClick={() => navigate('/my-bookings')} 
                icon={<TicketPlus width={15} />}
              />
            </UserButton.Menu>
          </UserButton>
        )}

        <MenuIcon 
          className='md:hidden w-8 h-8 cursor-pointer' 
          onClick={() => setIsOpen(true)} 
        />
      </div>
    </div>
  )
}

export default Navbar
