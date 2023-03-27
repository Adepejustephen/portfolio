import React, { useState } from 'react'
import { Link } from 'react-scroll'
import {FaTimes} from "react-icons/fa"
import {RxHamburgerMenu} from "react-icons/rx"

const Header = () => {
  const [openNav, setOpenNav] = useState(false)
  return (
    <header className="w-full bg-dark px-10 md:px-14 xl:px-0 relative ">
      <div className="flex items-center justify-between m-auto max-w-6.5xl py-10 xxl:max-w-xbs">
        <div className="flex items-center">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">IfeAde</h1>
        </div>
        {/* Mobile nav-menu */}
        {openNav && (
          <ul className="flex flex-col gap-4 items-center justify-center md:hidden fixed overflow-hidden h-screen inset-0 bg-slate-900 z-[100] w-full transition">
            <li className="text-white cursor-pointer hover:font-semibold transition">
              <Link to="/">Home</Link>
            </li>
            <li className="text-white cursor-pointer  hover:font-semibold transition">
              <Link to="works">Works</Link>
            </li>
            <li className="text-white cursor-pointer  hover:font-semibold transition">
              <Link to="about">About</Link>
            </li>
            <li className="text-white cursor-pointer  hover:font-semibold transition">
              <Link to="contact">Contact</Link>
            </li>
            <li className="text-white  hover:font-semibold transition hover:transition">
              <a href="/">Blog</a>
            </li>
          </ul>
        )}
        <ul className="md:flex gap-4 items-center hidden ">
          <li className="text-white cursor-pointer hover:font-semibold transition">
            <Link to="/">Home</Link>
          </li>
          <li className="text-white cursor-pointer  hover:font-semibold transition">
            <Link to="works">Works</Link>
          </li>
          <li className="text-white cursor-pointer  hover:font-semibold transition">
            <Link to="about">About</Link>
          </li>
          <li className="text-white cursor-pointer  hover:font-semibold transition">
            <Link to="contact">Contact</Link>
          </li>
          <li className="text-white  hover:font-semibold transition hover:transition">
            <a href="/">Blog</a>
          </li>
        </ul>
        <button
          className="relative border-white border p-2 bg-transaprent outline-0 hover:border-orange rounded-md z-[100] md:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? <FaTimes /> : <RxHamburgerMenu />}
        </button>
      </div>
    </header>
  );
}

export default Header