import React from "react";
import { AppDispatch } from "../state/store";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { RootState } from "../state/store";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dispatch = useAppDispatch();
  const user = useSelector((state: RootState) => state);
  console.log("user", user);
  console.log(user);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='w-screen overflow-x-hidden'>
      <header>
        <div className='bg-gray-100 border-b border-gray-200'>
          <div className='px-4 mx-auto sm:px-6 lg:px-8'>
            <nav className='relative flex items-center justify-between h-14 lg:h-14'>
              <div className='hidden lg:flex lg:items-center lg:space-x-10'>
                <a
                  href='#'
                  title=''
                  className='text-base font-medium text-black'
                >
                  Features{" "}
                </a>

                <a
                  href='#'
                  title=''
                  className='text-base font-medium text-black'
                >
                  {" "}
                  Solutions{" "}
                </a>
              </div>

              <div className='lg:absolute lg:-translate-x-1/2  lg:left-1/2'>
                <div className='flex-shrink-0'>
                  <a href='#' title='' className='flex'>
                    {/* <img
                      className='w-auto h-8 lg:h-8'
                      src='https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg'
                      alt=''
                    /> */}
                    <span className='text-3xl font-bold text-black'>
                      Draw<span className='text-indigo-600'>React</span>
                    </span>
                  </a>
                </div>
              </div>

              <button
                type='button'
                className='flex items-center justify-center ml-auto text-white  rounded-full w-9 h-9 lg:hidden'
                onClick={handleToggle}
              >
                <svg
                  className='w-5 h-5'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                  />
                </svg>
              </button>

              <button
                type='button'
                className='inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100'
                onClick={handleToggle}
              >
                <svg
                  className='w-6 h-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M4 6h16M4 12h16m-7 6h7'
                  />
                </svg>
              </button>
              {user ? (
                <div className='hidden lg:flex lg:items-center lg:space-x-10'>
                  <a
                    href='#'
                    title=''
                    className='text-base font-medium text-black'
                  >
                    {" "}
                    Hello, {user.user.user.username}
                  </a>
                  {/* <button
                    className='text-base font-medium text-black'
                    onClick={() => dispatch(removeUser())}
                  >
                    {" "}
                    Sign out{" "}
                  </button> */}
                </div>
              ) : (
                <div className='hidden lg:flex lg:items-center lg:space-x-10'>
                  <a
                    href='#'
                    title=''
                    className='text-base font-medium text-black'
                  >
                    {" "}
                    Sign up{" "}
                  </a>
                  <a
                    href='/login'
                    title=''
                    className='text-base font-medium text-black'
                  >
                    {" "}
                    Sign in{" "}
                  </a>
                </div>
              )}
              {/* {user ? (
                <div className='hidden lg:flex lg:items-center lg:space-x-10'>
                  <a
                    href='#'
                    title=''
                    className='text-base font-medium text-black'
                  >
                    {" "}
                    Hello, {user.user.username}{" "}
                  </a>
                  <button
                    className='text-base font-medium text-black'
                    onClick={logout}
                  >
                    {" "}
                    Sign out{" "}
                  </button>
                </div>
              ) : (
                <div className='hidden lg:flex lg:items-center lg:space-x-10'>
                  <a
                    href='#'
                    title=''
                    className='text-base font-medium text-black'
                  >
                    {" "}
                    Sign up{" "}
                  </a>

                  <a
                    href='/login'
                    title=''
                    className='text-base font-medium text-black'
                  >
                    {" "}
                    Sign in{" "}
                  </a>
                </div>
              )} */}
            </nav>
          </div>
        </div>

        <nav
          className={`${isOpen ? "block" : "hidden"} lg:hidden py-4 bg-white `}
        >
          <div className='px-4 mx-auto sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between'>
              <p className='text-sm font-semibold tracking-widest text-gray-400 uppercase'>
                Menu
              </p>
            </div>

            <div className='mt-6'>
              <div className='flex flex-col space-y-2'>
                <a
                  href='#'
                  title=''
                  className='py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600'
                >
                  {" "}
                  Features{" "}
                </a>

                <a
                  href='#'
                  title=''
                  className='py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600'
                >
                  {" "}
                  Solutions{" "}
                </a>

                <a
                  href='#'
                  title=''
                  className='py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600'
                >
                  {" "}
                  Resources{" "}
                </a>

                <a
                  href='#'
                  title=''
                  className='py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600'
                >
                  {" "}
                  Pricing{" "}
                </a>
              </div>

              <hr className='my-4 border-gray-200' />
              {/* {user ? (
                <div>Hello</div>
              ) : (
                <div className='flex flex-col space-y-2'>
                  <a
                    href='#'
                    title=''
                    className='py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600'
                  >
                    {" "}
                    Sign up{" "}
                  </a>

                  <a
                    href='#'
                    title=''
                    className='py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600'
                  >
                    {" "}
                    Sign in{" "}
                  </a>
                </div>
              )} */}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
