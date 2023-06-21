import { NavLink } from "react-router-dom"


const Footer = () => {
  return (
    <footer className="bg-mainBlack h-fit md:h-72 p-20 mt-20">
       <div className="flex gap-20">
            <h2 className="text-3xl">
                <span className="text-orangeMain">Salary</span><span className="text-white">PayDay</span>
            </h2>
            <div className="footer-links">
                <ul>
                    <li className='text-xs my-4'><NavLink activeclassname='active' className='text-white hover:text-white' to='/homepage'>Solution</NavLink></li>
                    <li className='text-xs my-4'><NavLink activeclassname='active' className='text-white hover:text-white' to='/homepage'>About Us</NavLink></li>
                    <li className='text-xs my-4'><NavLink activeclassname='active' className='text-white hover:text-white' to='/homepage'>Contact Us</NavLink></li>   
                </ul>
            </div>
       </div>
       <hr className="bg-greyBg my-6" />
       <p className="text-white mt-8">copyright &copy;2022 EmployerPay All rights reserved.</p>
    </footer>
  )
}

export default Footer