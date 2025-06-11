interface Props {
  label: string;
  placeholder: string;
  id: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  className?: string;
  labelClassName?: string;
}

const TextInputLight = ({
  label,
  placeholder,
  id,
  name,
  type = 'text',
  required = false,
  error,
  value,
  onChange,
  onBlur,
  className = '',
  labelClassName = 'text-[#23486A]'
}: Props) => {
  return (
    <div className={`w-full px-2 my-4 md:mb-0 ${className}`}>
      <label 
        className={`block mb-2 text-lg font-medium ${
          error ? "text-red-500" : labelClassName
        }`} 
        htmlFor={id}
      >
        {label}
        {required && <span className="text-[#EFB036] ml-1">*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className={`w-full p-2 bg-[#F5EEDC] text-[#23486A] rounded border focus:outline-none focus:ring-2 focus:ring-[#4C7B8B] focus:border-transparent transition-colors duration-200 ${
          error ? "border-red-500" : "border-[#3B6790]"
        }`}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default TextInputLight;