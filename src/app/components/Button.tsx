import type { ButtonHTMLAttributes, ReactNode } from "react";
import React from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, className = "", ...props }: ButtonProps) => (
  <button
    className={`px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
