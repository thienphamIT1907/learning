import { clsx, type ClassValue } from "clsx";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ className }: ButtonProps) => {
  const [isLoading] = useState(false);

  const cn = (...input: ClassValue[]) => {
    return twMerge(clsx(input));
  };

  return (
    <button
      className={cn(" bg-blue-500 text-white py-2 px-4", className, {
        "bg-gray-400": isLoading,
      })}
    >
      Login
    </button>
  );
};

export default Button;
