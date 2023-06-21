import  { useState } from 'react'
import {  NavLink, useNavigate } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import '../../styles/nav.css'
import OrangeButton from '../../global-components/OrangeButton';
import { navUlLinks } from '../../utilities/utils';

const Nav = () => {
    const [ openNav, setOpenNav ] = useState(false)
    const moveTo = useNavigate()

    const next = () => {
        moveTo('/')
    }

  return (
    <nav className='bg-white sticky w-full top-0 z-10 flex justify-between items-center px-6 md:px-6 py-3'>
        <div className="logo text-left px-4">
            <h2 className="text-lg mt-4 ml-4">
                <span className="text-orangeMain text-3xl">Salary</span>
                <span className="text-blueMain text-3xl">PayDay</span>
                <p className='text-xs'>Get paid when you need it</p>
            </h2>    
        </div>
        <div className='md:flex md:items-center gap-5'>
            {
                openNav ? (
                    <ul className='absolute w-full bg-white p-4 left-0 top-[6rem] flex flex-col justify-center items-center md:justify-end md:hidden gap-2 py-4'>
                        {
                            navUlLinks.map( (link, idx) => (
                                <li key={idx} className='text-xs'><NavLink activeclassname='active' className='hover:text-orangeMain' to={link?.url}>{link?.link}</NavLink></li>
                            ))
                        }
                        <li>
                            <OrangeButton className='py-2 px-7 rounded-2xl text-xs hover:bg-orange-500' sx={{borderRadius: 30, paddingLeft: 5, paddingRight: 5}} text='Login' size='medium' onClick={() => next()} />
                        </li>
                    </ul>
                ) : (
                    <ul className='hidden md:flex md:items-center gap-8 px-8'>
                        {
                            navUlLinks.map( (link, idx) => (
                                <li key={idx} className='text-xs'><NavLink activeclassname='active' className='hover:text-orangeMain' to={link?.url}>{link?.link}</NavLink></li>
                            ))
                        }
                        <li>
                            <OrangeButton className='py-2 px-7 rounded-2xl text-xs hover:bg-orange-500' sx={{borderRadius: 30, paddingLeft: 5, paddingRight: 5}} text='Login' size='medium' onClick={() => next()} />
                        </li>
                    </ul>
                )
            }
        </div>


        {/* Mobile Hanburger */}
        <button className='md:hidden p-2 text-2xl text-grayText rounded-md outline-none focus:border-gray-400' onClick={
           () =>  setOpenNav(!openNav)
        }>
            {
                openNav ? (
                    <CloseIcon />
                ) : (
                    <MenuIcon />
                )
            }
        </button>
    </nav>
  )
}

export default Nav