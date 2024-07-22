import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
const LandingPage = () => {
  return (
    <div className='w-screen overflow-x-hidden'>
      <div className='flex flex-col min-h-[100dvh] w-full'>
        {/* <header className='flex items-center justify-center'>
          <a href='#' className='flex items-center justify-center'>
            <span className='sr-only'>Beta Shipping App</span>
          </a>
          <nav className='ml-auto flex gap-4 sm:gap-6'>
            <a
              href='#'
              className='text-sm font-medium hover:underline underline-offset-4'
            >
              Features
            </a>
            <a
              href='#'
              className='text-sm font-medium hover:underline underline-offset-4'
            >
              Pricing
            </a>
            <a
              href='#'
              className='text-sm font-medium hover:underline underline-offset-4'
            >
              About
            </a>
            <a
              href='#'
              className='text-sm font-medium hover:underline underline-offset-4'
            >
              Contact
            </a>
          </nav>
        </header> */}
        <main className='flex-1'>
          <section className='w-full py-12 md:py-24 lg:py-32 xl:py-48'>
            <div className='container px-4 md:px-6'>
              <div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
                <div className='flex flex-col justify-center space-y-4'>
                  <div className='space-y-2'>
                    <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
                      Streamline Your Shipping with Our Beta App
                    </h1>
                    <p className='max-w-[600px] text-muted-foreground md:text-xl'>
                      Our beta shipping app is designed to simplify your
                      logistics and help you deliver your products faster and
                      more efficiently.
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
                <img
                  src='https://via.placeholder.com/550x310'
                  width='550'
                  height='310'
                  alt='Hero'
                  className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last'
                />
              </div>
            </div>
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
