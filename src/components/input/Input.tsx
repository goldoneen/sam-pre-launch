interface Iprops {
  placeholder: string;
  className?: string;
  type?: string;
  spanClass?: string;
}

const Input = ({ placeholder, className, type }: Iprops) => {
  return (
    <input
      type={type ? type : "text"}
      className={`input-text ${className} px-3 py-4  text-base  text-[#7F8FA5] font-archivo-medium w-full border border-darkgray bg-[#141530] rounded-[5px] outline-none`}
      required
      placeholder={placeholder}
    />
  );
};

export default Input;
