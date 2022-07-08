import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <Link to="/rent">Rent</Link>
      </li>
      <li>
        <Link to="">Buy</Link>
      </li>
      <li tabindex="0">
        <Link to="" class="justify-between">
          Resources
          <svg
            class="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
          </svg>
        </Link>
        <ul class="p-2">
          <li>
            <Link to="">Resource 1</Link>
          </li>
          <li>
            <Link to="">Resource 2</Link>
          </li>
        </ul>
      </li>
    </>
  );
  return (
    <div>
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="" class="btn btn-ghost normal-case text-xl">
            Estatery
          </Link>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div class="navbar-end">
          <Link to="" class="btn btn-md mr-3 btn-outline">
            Login
          </Link>
          <Link to="" class="btn btn-md ">
            Signup
          </Link>
        </div>
        {/* <div class="navbar-end"> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Navbar;
