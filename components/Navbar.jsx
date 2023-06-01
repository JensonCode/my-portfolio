import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '@/styles/navbar';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
// Navbar

const navItems = [
  { name: 'introduction', pathName: '/#introduction' },
  { name: 'project', pathName: '/#project' },
  { name: 'about', pathName: '/#about' },
  { name: 'contact', pathName: '/#contact' },
];

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  return (
    <>
      <header id='nav-bar'>
        <nav
          id='nav'
          className='flex justify-between items-center sticky top-0 w-full h-[80px] px-[5%] lg:px-0 bg-first text-primary'
        >
          {/* brand */}
          <div id='nav-brand'>
            <Link href='/'>Jenson</Link>
          </div>

          {/* mobile toggle: hidden on lg devices*/}
          <div
            id='mobile-toggle'
            className='lg:hidden'
          >
            <button
              id='toggle'
              aria-label='toggle'
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <MenuIcon
                className={
                  'text-3xl text-icons transition-opacity opacity-0 delay-1000 duration-700 easy-in-out' +
                  (!showMobileMenu && ' opacity-100 ')
                }
              />
            </button>
          </div>

          {/* desktop menu items: display only on on lg devices */}
          <div
            id='nav-items'
            className='hidden lg:flex'
          >
            {navItems.map((item, index) => (
              <div
                id='nav-item'
                key={index}
                className={`${
                  styles.flexCenter
                } hover:text-secondary hover:bg-second transition-colors duration-300 easy-in-out ${
                  item.pathName === activeItem
                    ? 'bg-second border-b-4 border-third'
                    : ''
                }`}
                onClick={() => setActiveItem(item.pathName)}
              >
                <Link
                  href={item.pathName}
                  className='h-full p-6'
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </nav>
      </header>

      {/* mobile menu items: hidden on lg devices */}
      <aside id='mobile-sidebar'>
        {/* backdrop */}
        <div
          id='backdrop'
          className={
            'fixed inset-0 bg-fourth/30 z-10' + (!showMobileMenu && ' hidden ')
          }
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        />
        <div
          id='sidebar'
          className={
            'fixed top-0 right-0 w-[60vw] md:w-[40vw] h-full bg-white shadow-lg z-20 transition-transform duration-1000 ease-in-out' +
            (!showMobileMenu && ' translate-x-full ')
          }
        >
          <div className='h-[80px]'>
            <button
              id='toggle'
              aria-label='toggle'
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className={
                'px-[5%] h-full transition-transform duration-700 ease-in-out' +
                (showMobileMenu && ' rotate-180 ')
              }
            >
              <MenuOpenIcon className='text-3xl text-icons' />
            </button>
          </div>
          <div
            id='sidebar-items'
            className={`${showMobileMenu ? 'flex flex-col' : 'hidden'}`}
          >
            {navItems.map((item, index) => (
              <div
                id='sidebar-item'
                key={index}
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                <Link
                  href={item.pathName}
                  className={`flex h-full p-6 `}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
