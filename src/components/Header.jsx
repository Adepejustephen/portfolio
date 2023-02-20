import React from 'react'
import { Link } from 'react-scroll'

const Header = () => {
  return (
    <header className="w-full bg-dark px-10 md:px-14 xl:px-0 ">
      <div className="flex items-center justify-between m-auto max-w-6.5xl py-10 xxl:max-w-xbs">
        <div className="relative"></div>

        <ul className="md:flex gap-4 items-center hidden ">
          <li className="text-white">
            <Link to="">Home</Link>
          </li>
          <li className="text-white">
            <Link to="">Works</Link>
          </li>
          <li className="text-white">
            <Link to="">About</Link>
          </li>
          <li className="text-white">
            <Link to="">Contact</Link>
          </li>
          <li className="text-white">
            <a href="/">Blog</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header