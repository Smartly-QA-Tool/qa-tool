import React from 'react'

import { Outlet, useLocation, Link } from "react-router-dom";

import { checkerHeader } from '../../constants/navigaton'

function CodeChecker() {
  const {
    pathname,
  } = useLocation()
  
  return (
    <>
      <div className="navbar bg-base-100 min-h-fit p-0">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={1} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Dashboard</a></li>
              <li><a>Compare Code</a></li>
              <li><a>Code Finder</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl hover:bg-transparent">Code Checker</a>
          <div className="navbar-start hidden lg:flex">
          <ul className="menu menu-horizontal px-1">

            {
              checkerHeader.map((header, index) => (
                <li key={index} className="mx-1">
                  <Link to={header.navigate} className={`${pathname === header.navigate ? 'active' : ''}`}>
                    {header.label}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
        </div>
      </div>
      <Outlet/>
    </>
  )
}

const Memo = React.memo(CodeChecker)

export {
  Memo as default,
}