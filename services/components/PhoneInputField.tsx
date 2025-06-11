import React from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

interface PhoneInputFieldProps {
  label: string;
  id: string;
  name: string;
  required?: boolean;
  error?: string;
  onChange: (e: { target: { value: string; name: string } }) => void;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  value: string;
  placeholder?: string;
  defaultCountry?: string;
  className?: string;
  labelClassName?: string;
}

const PhoneInputField: React.FC<PhoneInputFieldProps> = ({
  label,
  id,
  name,
  required = false,
  error = "",
  onChange,
  onBlur,
  value,
  placeholder = "+1 (555) 000-0000",
  defaultCountry = "us",
  className = "",
  labelClassName = ""
}) => {
  return (
    <div className={`w-full px-2 my-4 md:mb-0 ${className}`}>
      <label
        htmlFor={id}
        className={`mb-2 text-lg font-medium ${
          error ? "text-red-500" : labelClassName || "text-[#23486A]"
        }`}
      >
        {label} {required && <span className="text-[#EFB036]">*</span>}
      </label>
      <PhoneInput
        defaultCountry={defaultCountry}
        value={value}
        onChange={(phone: string) =>
          onChange({ target: { value: phone, name } })
        }
        inputProps={{
          id,
          name,
          required,
          placeholder,
          onBlur,
        }}
        inputClassName={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
          error
            ? "border-red-500 focus:ring-red-300"
            : "border-[#3B6790] focus:ring-[#4C7B8B]"
        }`}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default PhoneInputField;