import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from '@/styles';
import { Menu, MenuOpen } from '@mui/icons-material';

import SocialMedia from './pageTools/SocialMedia';

// Navbar
const navItems = [
  { name: 'introduction', pathName: '/#introduction', colour: 'bg-first' },
  { name: 'project', pathName: '/#project', colour: 'bg-second' },
  { name: 'about', pathName: '/#about', colour: 'bg-third' },
  { name: 'contact', pathName: '/#contact', colour: 'bg-fourth' },
];

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeItem, setActiveItem] = useState(navItems[0]);
  const [backgroundColour, setBackgroundColour] = useState(navItems[0].colour);

  useEffect(() => {
    function handleScroll() {
      const currentPosition = window.pageYOffset;

      const currIndex = navItems.findIndex((item) => {
        const section = document.getElementById(item.name);
        return (
          section.offsetTop < currentPosition + 80 &&
          section.offsetTop + section.offsetHeight > currentPosition + 80
        );
      });

      if (currIndex !== -1) {
        setActiveItem(navItems[currIndex]);
        setBackgroundColour(navItems[currIndex].colour);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        id='nav-bar'
        className='sticky top-0 w-full z-10'
      >
        <nav
          id='nav'
          className={`flex items-center justify-between lg:justify-start w-full h-[80px] pr-[5%] lg:pr-0 text-dark ${backgroundColour} `}
        >
          {/* brand */}
          <div
            id='nav-brand'
            className='px-[5%] cursor-default'
          >
            Jenson
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
              <Menu
                className={
                  'text-3xl text-primary transition-opacity opacity-0 delay-1000 duration-700 easy-in-out' +
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
                } transition-colors hover:text-dark hover:bg-blue/30 duration-700 easy-in-out ${
                  item.pathName === activeItem.pathName
                    ? 'border-b-4 border-blue'
                    : ''
                }`}
                onClick={() => {
                  setActiveItem(item);
                  setBackgroundColour(item.colour);
                }}
              >
                <Link
                  href={item.pathName}
                  className='h-full p-6 text-lg font-bold'
                >
                  {item.name.toUpperCase()}
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
            'fixed inset-0 bg-black/30 z-20 ' + (!showMobileMenu && ' hidden ')
          }
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        />
        <div
          id='sidebar'
          className={
            `fixed top-0 right-0 w-[60vw] md:w-[40vw] h-full ${backgroundColour} shadow-lg z-20 transition-transform duration-700 ease-in-out ` +
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
              <MenuOpen className='text-3xl text-primary' />
            </button>
          </div>
          <div className='flex flex-col justify-between'>
            <div
              id='sidebar-items'
              className={`${showMobileMenu ? 'flex flex-col' : 'hidden'}`}
            >
              {navItems.map((item, index) => (
                <div
                  id='sidebar-item'
                  key={index}
                  className={`${styles.flexCenter} ${
                    item.pathName === activeItem.pathName
                      ? 'border-b-4 border-blue'
                      : ''
                  }`}
                  onClick={() => {
                    setActiveItem(item);
                    setShowMobileMenu(!showMobileMenu);
                  }}
                >
                  <Link
                    href={item.pathName}
                    className={`flex h-full p-6 font-bold md:text-2xl md:p-10`}
                  >
                    {item.name.toUpperCase()}
                  </Link>
                </div>
              ))}
            </div>
            <div className='mx-auto'>
              <SocialMedia loaded={true} />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
