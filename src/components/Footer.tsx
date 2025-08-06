"use client";

import { Link } from "react-router-dom";
const date = new Date();
const year = date.getFullYear();

function Footer() {
  return (
    <footer className="w-full pt-5 p-2  dark:bg-slate-900 bg-slate-200 sticky top-[100vh]">
      {/* <hr className="my-4" /> */}
      <div className="mx-auto max-w-7xl items-center lg:justify-between px-4 md:flex lg:px-0 w-11/12 md:w-11/12 lg:w-11/12  xl:container">
        <Link to={"/"}>
          <div className="lg:inline-flex items-center hidden">
            <span className=" text-lg font-bold dark:text-white ">Dhruv Verma</span>
          </div>
        </Link>
        <div className="md:mt-0 text-center lg:space-y-0 space-y-5">
          <p className="text-sm font-medium">
            © {year}
            <a href="https://github.com/vermadhruv02" target="_blank">
              <span className="font-bold text-indigo-500 hover:underline ml-1 mr-1">
                Dhruv Verma
              </span>
            </a>
            All rights reserved.
          </p>


        </div>
      </div>
    </footer>
  );
}

export default Footer;
