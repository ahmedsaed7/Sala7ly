"use client";

import React from "react";
import { Button } from "./Button";

interface SaveButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'subtle' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
}

const SaveButton: React.FC<SaveButtonProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  variant = 'default',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  size = 'default',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  className,
  ...props
}) => {
  return (
    <Button
      className="relative bg-[#23486A] hover:bg-[#3B6790] transition-all duration-300 rounded-xl px-6 py-2 group overflow-hidden"
      {...props}
    >
      <div className="absolute inset-0 flex items-center justify-center translate-y-full transform transition-transform duration-300 group-hover:translate-y-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#F5EEDC]"
        >
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      </div>

      <span className="text-[#F5EEDC] font-medium transform transition-transform duration-300 group-hover:-translate-y-full inline-block">
        Save
      </span>
    </Button>
  );
};

export default React.memo(SaveButton);