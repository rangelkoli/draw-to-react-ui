import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
const LandingPage = () => {
  return (
    <div className='w-screen overflow-x-hidden'>
      <div className='flex flex-col min-h-[100dvh] w-full'>
        <main className='flex-1'>
          <section className='flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-28 mt-20'>
            <a
              href='#'
              target='_blank'
              rel='noreferrer'
              className='border rounded-2xl py-1 px-4 text-slate-100 text-sm mb-5 hover:scale-105 transition duration-300 ease-in-out'
            >
              Inspired by the amazing
              <span className='font-semibold'>restorePhotos</span> app
            </a>
            <h1 className='mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-slate-200 sm:text-7xl'>
              Make your photos
              <span className='relative whitespace-nowrap text-orange-400'>
                <svg
                  aria-hidden='true'
                  viewBox='0 0 418 42'
                  className='absolute top-2/3 left-0 h-[0.58em] w-full fill-orange-300/70'
                  preserveAspectRatio='none'
                >
                  <path d='M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z'></path>
                </svg>
                <span className='relative'>Pop</span>
              </span>
            </h1>
            <p className='mx-auto mt-12 max-w-xl text-lg text-slate-100 leading-7'>
              Want to style up your photos? Maybe get that perfect LinkedIn
              headshot? Let our AI do its magic and replace your background with
              your color of choice. 100% free – pop your photos today.
            </p>
            <a
              className='bg-black rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-black/80'
              href='#'
            >
              Pop your photos →
            </a>
          </section>
          <section className='w-full py-12 md:py-24 lg:py-32 bg-muted'>
            <div className='container px-4 md:px-6'>
              <div className='flex flex-col items-center justify-center space-y-4 text-center'>
                <div className='space-y-2'>
                  <div className='inline-block rounded-lg bg-muted px-3 py-1 text-sm'>
                    Key Features
                  </div>
                  <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                    Streamline Your Shipping Process
                  </h2>
                  <p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                    Our beta shipping app offers a range of features to help you
                    manage your logistics more efficiently, from real-time
                    tracking to automated scheduling.
                  </p>
                </div>
              </div>
              <div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12'>
                <div className='flex flex-col justify-center space-y-4'>
                  <ul className='grid gap-6'>
                    <li>
                      <div className='grid gap-1'>
                        <h3 className='text-xl font-bold'>
                          Real-Time Tracking
                        </h3>
                        <p className='text-muted-foreground'>
                          Monitor the status of your shipments in real-time and
                          receive alerts on any delays or issues.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className='grid gap-1'>
                        <h3 className='text-xl font-bold'>
                          Automated Scheduling
                        </h3>
                        <p className='text-muted-foreground'>
                          Streamline your shipping schedule with our automated
                          tools, ensuring timely deliveries and reducing manual
                          effort.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className='grid gap-1'>
                        <h3 className='text-xl font-bold'>
                          Intelligent Routing
                        </h3>
                        <p className='text-muted-foreground'>
                          Our app uses advanced algorithms to optimize your
                          shipping routes, minimizing costs and transit times.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <img
                  src='/placeholder.svg'
                  width='550'
                  height='310'
                  alt='Features'
                  className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last'
                />
              </div>
            </div>
          </section>
          <section className='w-full py-12 md:py-24 lg:py-32 border-t'>
            <div className='container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10'>
              <div className='space-y-3'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                  Get Early Access to Our Beta App
                </h2>
                <p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Sign up now to be one of the first to try our innovative
                  shipping solution and experience the benefits of streamlined
                  logistics.
                </p>
              </div>
              <div className='w-full max-w-sm space-y-2'>
                <form className='flex gap-2'>
                  <input
                    type='email'
                    placeholder='Enter your email'
                    className='max-w-lg flex-1'
                  />
                  <button type='submit'>Get Early Access</button>
                </form>
                <p className='text-xs text-muted-foreground'>
                  Sign up to be one of the first to try our beta app.{" "}
                  <a href='#' className='underline underline-offset-2'>
                    Terms &amp; Conditions
                  </a>
                </p>
              </div>
            </div>
          </section>
        </main>
        <footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
          <p className='text-xs text-muted-foreground'>
            &copy; 2024 Beta Shipping App. All rights reserved.
          </p>
          <nav className='sm:ml-auto flex gap-4 sm:gap-6'>
            <a href='#' className='text-xs hover:underline underline-offset-4'>
              Terms of Service
            </a>
            <a href='#' className='text-xs hover:underline underline-offset-4'>
              Privacy
            </a>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
