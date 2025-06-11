"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: {
    id: string;
    title: string;
    href: string;
  }[];
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

export default function MobileMenu({
  isOpen,
  onClose,
  links,
  isLoggedIn,
  setIsLoggedIn,
}: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
      <div
        ref={menuRef}
        className="fixed top-0 right-0 h-full w-4/5 max-w-xs bg-[#23486A] z-50 transform transition-transform duration-300 ease-in-out shadow-xl"
      >
        {/* Header Section */}
        <div className="flex justify-between items-center p-4 border-b border-[#3B6790]">
          <h2 className="text-xl font-bold text-[#EFB036]">Logo</h2>
          <Button
            onClick={onClose}
            aria-label="Close menu"
            className="text-[#F5EEDC]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Button>
        </div>

        {/* Navigation Links */}
        <nav className="py-4">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              onClick={onClose}
              className="block px-4 py-3 text-[#F5EEDC] hover:bg-[#3B6790] transition-colors duration-200"
            >
              {link.title}
            </Link>
          ))}

          {/* Register/Login Buttons */}
          {!isLoggedIn && (
            <div className="flex  gap-2 mt-4">
              <Button
                className="bg-[#F5EEDC] hover:bg-[#EFB036] text-[#23486A] hover:text-[#F5EEDC] font-extrabold w-full mt-4 mx-4"
                asChild
              >
                <Link href="/register" onClick={onClose}>
                  Register
                </Link>
              </Button>
              <Button
                className="bg-[#EFB036] hover:bg-[#cc9933] text-[#F5EEDC] hover:text-[#23486A] font-extrabold w-full mt-4 mx-4"
                asChild
              >
                <Link href="/login" onClick={onClose}>
                  Login
                </Link>
              </Button>
            </div>
          )}

          {/* Logout Button */}
          {isLoggedIn && (
            <Button
              className="bg-[#EFB036] hover:bg-[#EFB036]/90 text-[#F5EEDC] hover:text-[#23486A] font-bold w-full mt-4 mx-4"
              onClick={() => {
                setIsLoggedIn(false);
                onClose();
              }}
            >
              Logout
            </Button>
          )}
        </nav>
      </div>
    </div>
  );
}