import { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="w-full relative">
        {label && (
          <label className="block text-md font-medium text-gray-500 absolute -top-3 left-2 bg-white rounded-full">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`w-full h-14 rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#66D2CE] transition-all
            ${error ? "border-red-500 focus:ring-red-500" : "border-gray-300"}
            ${className || ""}
          `}
          {...props}
        />
        {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
