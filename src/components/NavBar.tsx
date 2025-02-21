import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon, MenuIcon } from 'lucide-react';
import { useDarkMode } from '@/hooks/useDarkMode.ts';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    const menuList = [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "Projects",
            url: "/projects"
        },
        // {
        //     name: "Portfolio",
        //     url: "/portfolio"
        // },
        {
            name: "About",
            url: "/about"
        },
        // {
        //     name: "Contact",
        //     url: "/contact"
        // }
    ];
    
    return (
        <>
        <header className="
        sticky top-0 z-50 mx-auto max-w-7xl  
        rounded
        lg:border lg:border-slate-500/10  
        flex-none shadow-sm transition-colors duration-500 lg:z-50  dark:border-slate-50/1   bg-slate-50/5 backdrop-blur-2xl supports-backdrop-blur:bg-white/10 dark:bg-slate-900/5 -mb-20">
        <nav >
            <div 
            className="mx-auto flex container items-center justify-between px-4 py-2 sm:px-6 lg:px-8"
            >
                {/* Logo aligned to the left */}
                <div className="text-2xl font-bold">
                    <Link to="#home">Dhruv Verma</Link>
                </div>

                {/* Menu items centered for desktop */}
                <div className="hidden md:flex space-x-4 mx-auto">
                    {menuList.map((menuItem)=>(
                        <Link 
                        to={menuItem.url} 
                        key={menuItem.name}
                        className='hover:text-orange-400 font-bold size-xl'
                        >
                            {menuItem.name}
                        </Link>
                    ))}

                </div>

                {/* Hamburger Icon for mobile, aligned right */}
                <div className="md:hidden flex items-center">
                    <Button
                        onClick={toggleMenu}
                        variant="ghost"
                        className="focus:outline-none">
                        <MenuIcon />
                    </Button>
                </div>

                {/* Dark Mode Button */}

                <div className='hidden md:block '>
                <Button onClick={toggleDarkMode} variant="outline" className='rounded-full'>
                        {isDarkMode ? <SunIcon /> : <MoonIcon />}
                    </Button>
                </div>
            </div>

            {/* Mobile Menu (Conditional Rendering) */}
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                <div className="flex flex-col items-center justify-center ">
                {menuList.map((menuItem)=>(
                        <Link to={menuItem.url} key={menuItem.name}                         className='hover:text-orange-400 font-bold size-xl'
>{menuItem.name}</Link>
                    ))}
                    <Button onClick={toggleDarkMode} variant="ghost">
                        {isDarkMode ? <SunIcon /> : <MoonIcon />}
                    </Button>
                </div>
            </div>
        </nav>
        </header>
        </>
    );
};

export default Navbar;

