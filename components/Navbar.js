'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const cartCount = useSelector((state) => state.cart.items.length);
  const wishlistCount = useSelector((state) => state.wishlist.length);

  const isActive = (path) => pathname === path;

  const linkClass = (path) =>
    `cursor-pointer hover:text-yellow-300 transition-colors duration-200 ${isActive(path) ? 'font-semibold underline underline-offset-4' : ''}`;

  return (
    <nav className="bg-gradient-to-r from-black via-green to-green-800 sticky top-0 left-0 z-10 text-white py-2 lg:py-4 px-4 lg:px-10">
      <div className="flex items-center justify-between">
        <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isMenuOpen
                  ? 'M6 18L18 6M6 6l12 12'
                  : 'M4 6h16M4 12h16M4 18h16'
              }
            />
          </svg>
        </button>

        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 tracking-wide drop-shadow-lg animate-fade-in">
          Shopverse
        </h1>

        <section className="flex">
          <ul className="hidden lg:flex gap-5 items-center">
            <Link href="/" className={linkClass('/')}>
              Home
            </Link>
            <Link href="/category" className={linkClass('/category')}>
              Products
            </Link>
            <Link href="/orders"  className={linkClass('/orders')}>Orders</Link>
            <Link href="/about"  className={linkClass('/about')}>About</Link>
          </ul>

          <Link href="/cart" className="relative hover:text-yellow-300 transition-colors duration-200 pl-5">
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25q0-.075.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"
              />
            </svg>
          </Link>


          <Link href="/wishlist" className="relative hover:text-yellow-300 transition-colors duration-200 pl-4">
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-3 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
        2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09
        C13.09 3.81 14.76 3 16.5 3
        19.58 3 22 5.42 22 8.5
        c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              />
            </svg>
          </Link>
        </section>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
  <ul className="lg:hidden mt-4 flex flex-col gap-3 h-screen">
    <Link href="/" className={linkClass('/')} onClick={() => setIsMenuOpen(false)}>
      Home
    </Link>
    <Link href="/category" className={linkClass('/category')} onClick={() => setIsMenuOpen(false)}>
      Products
    </Link>
    <Link href="/orders" className={linkClass('/orders')} onClick={() => setIsMenuOpen(false)}>
      Orders
    </Link>
    <Link href="/about" className={linkClass('/about')} onClick={() => setIsMenuOpen(false)}>
      About
    </Link>
  </ul>
)}

    </nav>
  );
}
