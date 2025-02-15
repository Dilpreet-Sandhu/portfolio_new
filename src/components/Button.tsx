import React from "react";

interface buttonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  content: string;
}

const Button: React.FC<buttonProps> = ({ className, content, ...props }) => {
  return (
    <button
      {...props}
      className={`relative overflow-hidden  group font-sans px-4 py-2 font-semibold text-[14px] bg-white clip-button uppercase text-black`}
    >
      <span className="relative z-10">{content}</span>
      <span className="inset-0 origin-left scale-x-0 bg-blue-500 group-hover:scale-x-100 absolute transition-all duration-500"></span>
    </button>
  );
};

export default Button;
