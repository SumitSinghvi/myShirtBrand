import React from 'react'
import { Link } from 'gatsby'

export default function NavBar() {
  return (
    <nav id="navBar">
    <div className="bg-black h-8 flex items-center px-8">
        <p className="text-red-500 perfectfit  cursor-pointer" >Perfect Fit Guarantee</p>
        <p className="text-gray-400 perfectfit ml-auto ">Contact us: <span className="text-red-500 perfectfit">+91 8615820501   </span></p>
    </div>
    <nav className="bg-white h-11 flex items-center justify-between px-8">
        <Link to='/'> <p className="text-black text-2xl font-serif cursor-pointer">BARUCHE</p> </Link>
        <div className="dropdown">
            <p className="text-black perfectfit cursor-pointer dropdown-toggle" data-dropdown="men">MEN</p>
            <div className="dropdown-menu hidden" data-dropdown-menu="men">
                <ul className="list-none">
                    {/* <li><a href="#" className="text-black perfectfit cursor-pointer">Shirts</a></li>
                    <li><a href="#" className="text-black perfectfit cursor-pointer">Printed</a></li>
                    <li><a href="#" className="text-black perfectfit cursor-pointer">Linen</a></li>
                    <li><a href="#" className="text-black perfectfit cursor-pointer">Pants</a></li> */}
                    {/* Add more options as needed */}
                </ul>
            </div>
        </div>
        <div className="dropdown">
            <p className="text-black perfectfit cursor-pointer dropdown-toggle" data-dropdown="women">WOMEN</p>
            <div className="dropdown-menu hidden" data-dropdown-menu="women">
                <ul className="list-none">
                    {/* <!-- Women's dropdown options -->
                    <!-- ... --> */}
                </ul>
            </div>
        </div>
        <div className="dropdown">
            <p className="text-black perfectfit cursor-pointer dropdown-toggle" data-dropdown="accessories">ACCESSORIES</p>
            <div className="dropdown-menu hidden" data-dropdown-menu="accessories">
                <ul className="list-none">
                    {/* <!-- Accessories dropdown options -->
                    <!-- ... --> */}
                </ul>
            </div>
        </div>
        <p className="text-black perfectfit cursor-pointer">DEALS</p>
        <div className="dropdown">
            <p className="text-black perfectfit cursor-pointer dropdown-toggle" data-dropdown="design">DESIGN</p>
            <div className="dropdown-menu hidden" data-dropdown-menu="design">
                <ul className="list-none">
                    {/* <!-- Design dropdown options -->
                    <!-- ... --> */}
                </ul>
            </div>
        </div>
        <p className="text-black perfectfit cursor-pointer">WEDDINGS</p>
        <p className="text-black perfectfit cursor-pointer">CORPORATE PARTNERSHIP</p>
        <button className="text-white perfectfit cursor-pointer bg-black hover:text-red-500 py-2 px-4 ml-16">BOOK FITTING</button>
        <p className="text-black perfectfit cursor-pointer">SHOWROOM</p>
        <p className="text-black perfectfit cursor-pointer">MEASUREMENT</p>
        <Link to='/about'> <p className="text-black perfectfit cursor-pointer">ABOUT</p> </Link> 
        <i className="fas fa-user mr-1 cursor-pointer"></i>
        <i className="fas fa-shopping-cart ml-1 cursor-pointer"></i>          
    </nav>
    </nav>
  )
}
