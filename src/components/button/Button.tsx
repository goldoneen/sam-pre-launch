import React from "react";
import { ImSpinner9 } from "react-icons/im";

interface Iprops {
  className?: string;
  children: any;
  type?: any;
  onClick?: any;
  disabled?: boolean;
  isLoading?: boolean;
}

const Button = ({
  children,
  className,
  type,
  disabled,
  isLoading,
  ...rest
}: Iprops) => {
  return (
    <div>
      <button
        className={`inline-flex font-archive-medium  items-center justify-center px-6 sm:px-11 py-2.5 border border-transparent bg-[#21223B] hover:border-[#2F93FF] hover:border relative text-white text-base rounded-full focus:outline-none focus-visible:ring focus-visible:ring-primary-500, ${
          isLoading &&
          "relative !text-transparent hover:!text-transparent !cursor-wait !transition-none"
        }, ${className ? className : ""}`}
        type={type ? type : "button"}
        disabled={disabled ? true : false}
        {...rest}
      >
        {isLoading && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
            <ImSpinner9 className="animate-spin text-2xl" />
          </div>
        )}
        {children}
      </button>
    </div>
  );
};

export default Button;
