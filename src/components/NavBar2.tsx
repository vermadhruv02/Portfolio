
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
// import { usePathname } from "next/navigation";
import { useState } from "react";
// import DashboardMenu from "./DashboardMenu/DashboardMenu";

// import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Experience",
    href: "/experience",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  // {
  //   name: "Login",
  //   href: "/api/auth/login",
  // },
];
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="sticky  top-1 z-50  mx-auto max-w-7xl rounded-xl lg:border lg:border-slate-500/10  flex-none shadow-sm transition-colors duration-500 lg:z-50  dark:border-slate-50/[0.06]   bg-slate-50/5 backdrop-blur-2xl supports-backdrop-blur:bg-white/10 dark:bg-slate-900/5 -mb-20">
      <div className="relative w-full">
        <div className="bg-background text-foreground" />
        <div className="mx-auto flex container items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <Link to="/">
            <div className="inline-flex items-center space-x-0 ">
              <span className="font-bold dark:text-white ">Dhruv Verma</span>
            </div>
          </Link>
          <div className="hidden grow items-start lg:flex md:flex md:flex-grow flex-row justify-end space-x-1">
            <ul className="ml-12 inline-flex space-x-8 justify-center items-center">
              {menuItems.map((item) => {
                // const isActive =
                //   pathname === item.href ||
                //   (pathname.startsWith(item.href) && item.href !== "/");
                return (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className={`inline-flex items-center text-lg font-bold px-2  dark:hover:text-slate-500 hover:text-slate-400 transition-all ease-in-out duration-150 
                        `}
                    // {isActive ? "underline underline-offset-4 " : ""}
                    >
                      {item.name}
                      <span>
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </span>
                    </Link>
                  </li>
                );
              })}
              {
                // isAuthenticated && 
                (
                  <li
                    className={`inline-flex items-center text-lg font-bold px-2  dark:hover:text-slate-500 hover:text-slate-400 transition-all ease-in-out duration-150 `}
                  >
                    {/* <DashboardMenu /> */}
                  </li>
                )}
            </ul>
          </div>

          <div className="m-2">
            {/* <ModeToggle /> */}
          </div>

          <div className={`dropdown `}>
            <div className="flex justify-center items-center">
              <div className=" lg:hidden">
                {
                  // isAuthenticated && 
                  // <DashboardMenu />
                }
              </div>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                {isMenuOpen ? (
                  <X onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
                ) : (
                  <Menu
                    onClick={toggleMenu}
                    className="h-6 w-6 cursor-pointer"
                  />
                )}
              </div>
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content z-[1000] bg-slate-100 dark:bg-slate-900 rounded-box  mt- w-52 px-6 py-5 shadow right-0 text-lg gap-3 font-medium ${isMenuOpen ? "block" : "hidden"
                }`}
            >
              {menuItems.map((item) => {
                const isActive = false;
                //   pathname === item.href ||
                //   (pathname.startsWith(item.href) && item.href !== "/");
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={toggleMenu}
                    className={`-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-slate-200 dark:hover:bg-slate-800 ${isActive ? "underline underline-offset-4 " : ""
                      }`}
                  >
                    <span className="ml-3 text-base font-medium text-slate-900 dark:text-slate-100">
                      {item.name}
                    </span>
                    <span>
                      <ChevronRight className="ml-3 h-4 w-4" />
                    </span>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
