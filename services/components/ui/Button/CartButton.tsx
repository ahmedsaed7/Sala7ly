"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./Button";

interface CartButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'subtle' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
  navigateTo?: string;
}

const CartButton: React.FC<CartButtonProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  variant = 'default',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  size = 'default',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  className,
  navigateTo = '/worker-details',
  ...props
}) => {
  const [cartCount, setCartCount] = useState(0);
  const router = useRouter();

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
    if (navigateTo) {
      router.push(navigateTo);
    }
  };

  return (
    <div className="flex-1">
      <Button
        onClick={handleAddToCart}
        className="relative flex items-center justify-center bg-[#EFB036] hover:bg-[#EFB036]/90 text-[#23486A] font-extrabold text-lg px-4 h-[50px] rounded-xl transition-all duration-300 ease-in-out group active:scale-95 w-full transform hover:-translate-y-1"
        {...props}
      >
        <div className="flex items-center transition-transform duration-300 ease-in-out group-hover:scale-125">
          
          <div className="transition-transform duration-300 ease-in-out group-hover:translate-x-5 group-hover:scale-110">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              width="30" 
              height="30"
              className="transition-all duration-500 ease-in-out fill-[#23486A]/70 group-hover:fill-[#23486A]"
            >
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm1.82-10L18 5H6.83l-1.38-3H1V2h3.27l4.49 9.23-1.35 2.42c-.16.28-.24.6-.24.94 0 1.1.9 2 2 2h10v-2H9.41c-.28 0-.5-.22-.5-.5l.03-.12.97-1.75h6.5c.75 0 1.41-.41 1.75-1.03L21 7h-2.18z" />
            </svg>
          </div>
        </div>
        <span className="ml-1 transition-all duration-500 ease-in-out group-hover:opacity-0">
          Add
        </span>

        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full animate-bounce shadow-md">
            {cartCount}
          </span>
        )}
      </Button>
    </div>
  );
};

export default React.memo(CartButton);



