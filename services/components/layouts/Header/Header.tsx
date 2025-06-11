"use client";

import { useState, useEffect } from "react";
import { Pages, Routes } from "@/lib/config/constants";
import Link from "../../ui/Link/Link";
import LanguageToggle from "../../ui/LanguageToggle/LanguageToggle";
import SearchBar from "../../ui/SearchBar/SearchBar";
import { Button } from "@/components/ui/Button/Button";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const links = [
    { id: crypto.randomUUID(), title: "Home", href: Routes.ROOT },
    { id: crypto.randomUUID(), title: "About", href: Routes.ABOUT },
    { id: crypto.randomUUID(), title: "Contact", href: Pages.CONTACT },
  ];

  // Simulate authentication state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("John Doe");
  const [profileImage, setProfileImage] = useState("/profile-icon.png");

  const [openMenu, setOpenMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const minOpacity = 0.7;
      const startFade = 50;
      const completeFade = 150;
      if (scrollPosition <= startFade) {
        setScrollOpacity(1);
      } else if (scrollPosition >= completeFade) {
        setScrollOpacity(minOpacity);
      } else {
        const fadeRange = completeFade - startFade;
        const fadeAmount = (scrollPosition - startFade) / fadeRange;
        setScrollOpacity(1 - (fadeAmount * (1 - minOpacity)));
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className="bg-[#23486A] shadow-md fixed top-0 w-full z-50 transition-opacity duration-200"
      style={{ opacity: scrollOpacity }}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/" className="text-[#F5EEDC] text-2xl font-bold">
            YourLogo
          </Link>
        </div>
        {/* show shearch */}
        {showSearch && (
          <div className="fixed inset-0 bg-[#23486A] z-50 p-4 md:hidden">
            <div className="flex items-center">
              <Button
                onClick={() => setShowSearch(false)}
                className="mr-2 text-[#F5EEDC]"
                aria-label="Close search"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </Button>
              <SearchBar />
            </div>
          </div>
        )}

        <div className="hidden md:flex items-center space-x-6">
          <div className="relative w-64">
            <SearchBar />
          </div>

          {links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="text-[#F5EEDC] hover:text-[#EFB036] transition-colors duration-200"
            >
              {link.title}
            </Link>
          ))}

          <LanguageToggle />

          {/* Show Register/Login buttons if not logged in */}
          {!isLoggedIn && (
            <>
              <Button
                className="bg-[#F5EEDC] hover:bg-[#EFB036] text-[#23486A] hover:text-[#F5EEDC] font-extrabold ml-4 transition-colors duration-200 "
                asChild
              >
                <Link href={Pages.Register}>Register</Link>
              </Button>
              <Button
                className=" bg-[#EFB036] hover:bg-[#cc9933] text-[#F5EEDC] hover:text-[#23486A] font-extrabold ml-4 transition-colors duration-200 " asChild>
                <Link href={Pages.LOGIN}>Login</Link>
              </Button>
            </>
          )}
          {/* Show user info and Logout button if logged in */}
          {isLoggedIn && (
            <div className="flex items-center space-x-2">
              <img
                src={profileImage}
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-[#F5EEDC]">{username}</span>
              <Button
                className="bg-[#EFB036] hover:bg-[#EFB036]/90 text-[#F5EEDC] hover:text-[#23486A] font-bold ml-4 transition-colors duration-200"
                onClick={() => setIsLoggedIn(false)}
              >
                Logout
              </Button>
            </div>
          )}
        </div>

        <div className="flex items-center space-x-4 md:hidden">
          <Button
            onClick={() => setShowSearch(true)}
            className="text-[#F5EEDC]"
            aria-label="Open search"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </Button>

          <LanguageToggle isMobile={true} />

          <Button
            className="text-[#F5EEDC]"
            onClick={() => setOpenMenu(!openMenu)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              {openMenu ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </Button>
        </div>

        <MobileMenu isOpen={openMenu} onClose={() => setOpenMenu(false)} links={links} isLoggedIn={false} setIsLoggedIn={function (value: boolean): void {
          throw new Error("Function not implemented.");
        } } />
      </div>
    </header>
  );
}